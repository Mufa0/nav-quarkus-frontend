import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,  Resolve, Router, RouterStateSnapshot } from "@angular/router";
import {  Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ArticleResponse } from "../shared/models/article/article-response.model";
import { ArticleService } from "../shared/services/article/article.service";

@Injectable({providedIn:"root"})
export class ArticleResolverService implements Resolve<ArticleResponse>{

    constructor(private articleService: ArticleService, private navigation: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ArticleResponse | Observable<ArticleResponse> | Promise<ArticleResponse> {
        let id = +route.params["id"];
        return <Observable<ArticleResponse>> this.articleService.getArticle(id).pipe(catchError(e => of(null)));
    }


}

