import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
   votes: number;
   title: string;
   link: string;

  constructor() {
     this.title = 'Angular';
     this.link = 'http://angular.io';
     this.votes = 10;   
   }

   voteUp() {
     this.votes += 1;
     }
   voteDown() {
     this.votes -= 1;
     }
    
  ngOnInit() {
  }

}
