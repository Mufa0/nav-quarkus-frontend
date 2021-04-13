import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ArticleRequest } from '../../models/article/article-request.model';
import { ArticleResponse } from '../../models/article/article-response.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  public constructor(private http: HttpClient) {}
  private articles: ArticleResponse[] = [
    new ArticleResponse(1, 'First article', 'My first article!'),
    new ArticleResponse(2, 'Second article', 'My second article!'),
    new ArticleResponse(3, 'Third article', 'My third article!'),
  ];


  public articlesChangedSubject: Subject<ArticleResponse[]> = new Subject();
  public getArticles() {
    return this.articles.slice();
  }
  public getArticlesFromBackend() {
    return this.http
      .get<ArticleResponse[]>('http://localhost:8080/articles');
  }

  public getArticle(id: number): ArticleResponse {
    return this.articles.find((article) => article.id === id);
  }

  public updateArticle(request: ArticleRequest) {
    const index = this.articles.indexOf(
      this.articles.find((x) => x.id === request.id)
    );
    this.articles.splice(index, 1);
    this.articles.push(
      new ArticleResponse(request.id, request.title, request.content)
    );

    this.articlesChangedSubject.next(
      this.articles
        .sort((a, b) => {
          return a.id >= b.id ? 1 : -1;
        })
        .slice()
    );
  }

  public createArticle(request: ArticleRequest) {
    const id = this.articles.length + 1;
    this.articles.push(new ArticleResponse(id, request.title, request.content));

    this.articlesChangedSubject.next(
      this.articles
        .sort((a, b) => {
          return a.id >= b.id ? 1 : -1;
        })
        .slice()
    );
  }

  public deleteArticle(id: number) {
    const index = this.articles.indexOf(this.articles.find((x) => x.id === id));
    this.articles.splice(index, 1);

    this.articlesChangedSubject.next(
      this.articles
        .sort((a, b) => {
          return a.id >= b.id ? 1 : -1;
        })
        .slice()
    );
  }
}
