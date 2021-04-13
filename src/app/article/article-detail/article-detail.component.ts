import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleResponse } from 'src/app/shared/models/article/article-response.model';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: ArticleResponse;

  id: number;

  constructor(private route: ActivatedRoute,private navigation: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params["id"];
    this.article = this.articleService.getArticle(this.id);
    if(!this.article){
      this.navigation.navigate(["/article"])
    }
  }

  onDelete(){
    this.articleService.deleteArticle(this.id);
    this.navigation.navigate(["/articles"])
  }

}
