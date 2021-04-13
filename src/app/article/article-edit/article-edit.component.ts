import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleRequest } from 'src/app/shared/models/article/article-request.model';
import { ArticleResponse } from 'src/app/shared/models/article/article-response.model';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article: ArticleResponse;

  id: number;

  form: FormGroup;

  constructor(private route: ActivatedRoute,private navigation: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params["id"]
    if(this.id){
      this.article = this.articleService.getArticle(this.id); 
      if(!this.article){
        this.navigation.navigate(["/article"])
      }
    }else{
      this.article = new ArticleResponse(null,null, null);
    }

    this.form = new FormGroup({
       'title': new FormControl(this.article.title),
       'content': new FormControl(this.article.content)
    })
    
  }

  onSubmit(){
    const article: ArticleRequest = this.form.value;
    if(this.article.id){
      article.id=this.article.id;
      this.articleService.updateArticle(article)
    }else{
      this.articleService.createArticle(article)
    }
    
    
    this.navigation.navigate(["/article"])
  }

}
