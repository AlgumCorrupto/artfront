import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ArticlerService } from '../articler.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss'
})
export class EditArticleComponent implements OnInit {
  articleForm!: FormGroup;
  id!: string;
  article!: any;
  constructor(private articleServ: ArticlerService, private route: ActivatedRoute) {

  }


  showArticle(id: string) {
    return this.articleServ.showArticle(id).subscribe((article) => {
      this.article = article;
      console.log(this.article)
      this.articleForm = new FormGroup({
        title: new FormControl(this.article[0].title),
        body: new FormControl(this.article[0].body),
        author: new FormControl(this.article[0].author)
      })
    })
  }

  onSubmit() {
   return this.articleServ.editArticle(this.articleForm.value, this.id).subscribe(() => {
      console.log("artigo editado")
   })

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if(this.id) {
      this.showArticle(this.id);
    }
  }
}
