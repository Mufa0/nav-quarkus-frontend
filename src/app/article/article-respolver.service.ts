import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { ArticleResponse } from "../shared/models/article/article-response.model";
import { ArticleService } from "../shared/services/article/article.service";

@Injectable({providedIn:"root"})
export class ArticleResolverService implements Resolve<ArticleResponse>{

    constructor(private articleService: ArticleService, private navigation: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ArticleResponse | Observable<ArticleResponse> | Promise<ArticleResponse> {
        let id = +route.params["id"];
        return this.articleService.getArticle<ArticleResponse>(id).pipe(
                mergeMap(article =>{
                    if(article){
                        return of(article)
                    }else{
                        this.navigation.navigate(['/articles'])
                        return EMPTY;
                    }
                })
            )
        
    }


}

