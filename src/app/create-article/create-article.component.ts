import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ArticlerService } from '../articler.service';
import { Article } from '../interfaces';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent implements OnInit {
  articleForm!: FormGroup;
  constructor(private articleServ: ArticlerService) {

  }

  onSubmit() {
    console.log(this.articleForm.value)
    this.articleServ.postArticle(this.articleForm.value).subscribe(() =>{
      console.log("artigo criado");
    })

  }
  ngOnInit(): void {
    this.articleForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      author: new FormControl('')
    })
  }
}
