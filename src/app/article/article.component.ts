import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  upvote() {
    this.article.voteUp();
  }

  downvote() {
    this.article.voteDown();
  }

  ngOnInit() {
  }

}
