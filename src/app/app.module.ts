import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';
import { ArticleItemComponent } from './article/article-item/article-item.component';
import { HeaderComponent } from './header/header.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { AppRouterModule } from './shared/app-router.module';
import { ShortenPipe } from './shared/pipes/shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleEditComponent,
    ArticleItemComponent,
    HeaderComponent,
    ArticleDetailComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
