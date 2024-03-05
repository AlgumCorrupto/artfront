import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListArticlesComponent, CreateArticleComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
