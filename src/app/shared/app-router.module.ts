import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { ArticleDetailComponent } from "../article/article-detail/article-detail.component";
import { ArticleEditComponent } from "../article/article-edit/article-edit.component";
import { ArticleComponent } from "../article/article.component";

const routes: Routes = [

    {path:"articles/create", component:ArticleEditComponent},
    {path:"articles/:id/edit", component: ArticleEditComponent},
    {path:"articles/:id", component:ArticleDetailComponent},
    {path:"articles", component:ArticleComponent},

    {path:"", redirectTo: "/articles", pathMatch:"full"},
    {path:"**", redirectTo:"/articles"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule{

}