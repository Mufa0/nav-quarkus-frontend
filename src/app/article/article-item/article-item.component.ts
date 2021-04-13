import { Component, Input, OnInit } from '@angular/core';
import { ArticleResponse } from 'src/app/shared/models/article/article-response.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input("article")
  article: ArticleResponse;
  
  constructor() { }

  ngOnInit(): void {
  }

}
