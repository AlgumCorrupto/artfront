import { Routes } from '@angular/router';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { LeitorComponent } from './leitor/leitor.component';

export const routes: Routes = [
  {path: 'article-list', component: ListArticlesComponent},
  {path: 'create-article', component: CreateArticleComponent},
  {path: 'edit-article/:id', component: EditArticleComponent},
  {path: 'read-article/:id', component: LeitorComponent}
];
