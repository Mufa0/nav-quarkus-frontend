import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { SERVER_API } from '../../globals';
import { ArticleRequest } from '../../models/article/article-request.model';
import { ArticleResponse } from '../../models/article/article-response.model';

import { tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ArticleService {

  articlesUri: string = SERVER_API + 'articles';
  public constructor(private http: HttpClient) {}


  public articlesChangedSubject: Subject<void> = new Subject();
  public getArticles() {
    return this.http.get<ArticleResponse[]>(this.articlesUri);
  }

  public getArticle(id: number) {
    return this.http.get<ArticleResponse>(this.articlesUri+"/"+id);
  }

  public updateArticle(request: ArticleRequest) {
    return this.http.put<ArticleResponse>(this.articlesUri+"/"+request.id, request).pipe(tap( ()=> this.articlesChangedSubject.next())).subscribe();
  }

  public createArticle(request: ArticleRequest) {

    return this.http.post<ArticleResponse>(this.articlesUri, request).pipe( tap(() => this.articlesChangedSubject.next())).subscribe();

  }

  public deleteArticle(id: number) {
    return this.http.delete(this.articlesUri+"/"+id).pipe(tap(() => this.articlesChangedSubject.next())).subscribe();
  }
}
