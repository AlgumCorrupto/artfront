import { Component, OnInit } from '@angular/core';
import { ArticlerService } from '../articler.service';
import { Article } from '../interfaces';
import { DatePipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [NgFor, DatePipe],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss'
})
export class ListArticlesComponent implements OnInit {
  articler;
  articles: Article[] = [];
  constructor(articler: ArticlerService, private router: Router) {
    this.articler = articler;
   }

  ArticleList() {
    this.articler.listArticles().subscribe(
      article => {
        this.articles = article;
      }
    )
  }
  OnDelete(article: Article) {
    this.articler.deleteArticle(article.id).subscribe(article => {
      console.log(`"${article}" foi deletado`)
    });
    this.ArticleList();
  }
  OnEdit(id: number) {
    let sId:string = id.toString();
    this.router.navigate([`/edit-article/${sId}`])
  }
  OnRead(id: number) {
    let sId: string = id.toString();
    this.router.navigate([`/read-article/${sId}`]);
  }
  ngOnInit(): void {
    this.ArticleList();
  }
}
