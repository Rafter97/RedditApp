import {
  Component,
  OnInit,
  Input, // <-- added,
  HostBinding
} from '@angular/core';

import { Article } from './article-component.model';

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


  ngOnInit() {
  }

}
