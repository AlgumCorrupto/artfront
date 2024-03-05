import { Component, OnInit } from '@angular/core';
import { ArticlerService } from '../articler.service';
import { ActivatedRoute } from '@angular/router';
import { BypassSecurityPipe } from '../bypass-security.pipe';

@Component({
  selector: 'app-leitor',
  standalone: true,
  imports: [BypassSecurityPipe],
  templateUrl: './leitor.component.html',
  styleUrl: './leitor.component.scss'
})
export class LeitorComponent implements OnInit {
  article!: any;
  id!: string;
  loaded: boolean = false
  constructor(private articleServ: ArticlerService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
    if(this.id) {
      this.articleServ.showArticle(this.id).subscribe(article =>{
        this.article = article;
        this.loaded = true;
        console.log(this.article[0].title)
      })
    }
  }
}
