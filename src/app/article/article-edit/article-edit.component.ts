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

  form: FormGroup;

  constructor(private route: ActivatedRoute,private navigation: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    if(this.route.snapshot.params["id"]){
      this.route.data.subscribe({
        next: (data: {article:ArticleResponse}) => {this.article = data.article},
        error: (error) => console.log(error)
      })
    }else{
      this.article = new ArticleResponse(null,null,null,null);
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
