import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticlePost } from './interfaces';
import { response } from 'express';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlerService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  listArticles() {
    return this.http.get<Article[]>('/api/articler', {responseType: 'json'})
  }
  deleteArticle(id: number) {
    return this.http.delete(`/api/articler/${id}`)
  }
  postArticle(article:ArticlePost) {
    return this.http.post<ArticlePost>("/api/articler", {title: article.title, body: article.body, author: article.author}, this.httpOptions)
  }

  showArticle(id: string) {
    return this.http.get(`/api/articler/${id}`)
  }

  editArticle(article: ArticlePost, id: string) {
    return this.http.patch(`/api/articler/${id}`, article, this.httpOptions)
  }
}
