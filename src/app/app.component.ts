import { Component } from '@angular/core';
import { Article } from './article-component/article-component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  articles: Article[]; // <-- component property



  constructor() {
    this.articles = [
    new Article('Angular', 'http://angular.io', 3),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular Homepage', 'http://angular.io', 1),
    ];
   }



  //You are submitting the title and Link 
  //It is being logged in the console
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
     console.log(`Adding article title: ${title.value} and link: ${link.value}`);
     this.articles.push(new Article(title.value,link.value,0))
     title.value = '';
     link.value = '';
     return false;  //So it wont refresh
     //True makes it refresh ever time you submit
     }
    
     sortedArticles(): Article[] {
      return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
      }

}
