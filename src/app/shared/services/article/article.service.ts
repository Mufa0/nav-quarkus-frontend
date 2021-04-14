import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { SERVER_API } from '../../globals';
import { ArticleRequest } from '../../models/article/article-request.model';
import { ArticleResponse } from '../../models/article/article-response.model';

import { catchError,tap } from 'rxjs/operators';
import { HttpErrorHandler } from 'src/app/http-error-handler.service';


@Injectable({ providedIn: 'root' })
export class ArticleService {

  articlesUri: string = SERVER_API + 'articles';
  public constructor(private http: HttpClient, private errorHandler: HttpErrorHandler) {}


  public articlesChangedSubject: Subject<void> = new Subject();
  public getArticles() {
    return this.http.get<ArticleResponse[]>(this.articlesUri).pipe(catchError(e => this.errorHandler.handlError(e)));
  }

  public getArticle<T>(id: number): Observable<T> {
    return this.http.get<T>(this.articlesUri+"/"+id).pipe(catchError( e => this.errorHandler.handlError<T>(e)));
  }

  public updateArticle(request: ArticleRequest) {
    return this.http.put<ArticleResponse>(this.articlesUri+"/"+request.id, request).pipe(catchError( e => this.errorHandler.handlError(e)),tap( ()=> this.articlesChangedSubject.next())).subscribe();
  }

  public createArticle(request: ArticleRequest) {

    return this.http.post<ArticleResponse>(this.articlesUri, request).pipe(catchError(e => this.errorHandler.handlError(e)), tap(() => this.articlesChangedSubject.next())).subscribe();

  }

  public deleteArticle(id: number) {
    return this.http.delete(this.articlesUri+"/"+id).pipe(catchError( e => this.errorHandler.handlError(e)), tap(() => this.articlesChangedSubject.next())).subscribe();
  }
}
