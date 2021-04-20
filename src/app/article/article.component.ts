import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleResponse } from '../shared/models/article/article-response.model';
import { ArticleService } from '../shared/services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  articles: ArticleResponse[] = [];

  subscriptions: Subscription[] = [];

  constructor(private articleService: ArticleService, private navigation: Router) { }

  ngOnInit(): void {
    this.fetchArticles()
    this.subscriptions.push(this.articleService.articlesChangedSubject.subscribe(() => this.fetchArticles()))
  }

  ngOnDestroy(){
    for(let sub of this.subscriptions){
      sub.unsubscribe();
    }
  }


  fetchArticles(){
    this.articleService.getArticles().subscribe({
      next: (articles: ArticleResponse[]) => this.articles = articles,
      error: (error) => console.log(error)
    });
  }
}
