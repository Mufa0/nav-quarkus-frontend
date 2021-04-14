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


  constructor(private route: ActivatedRoute,private navigation: Router, private articleService: ArticleService) { }

  
  ngOnInit(){
    console.log("Something")
    this.route.data.subscribe(
      (data: {article:ArticleResponse}) => {
        if(data.article){
          this.article = data.article
        }else{
          this.navigation.navigate(["/articles"])
        }
      })
  }

  onDelete(){
    this.articleService.deleteArticle(this.article.id);
    this.navigation.navigate(["/articles"])
  }

}
