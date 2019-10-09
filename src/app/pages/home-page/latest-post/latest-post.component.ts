import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent implements OnInit {

  page = 0;
  latestNews: any;
  showLoadMore: boolean = true;
  rowPerPage = 6;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getLatestNews();
  }

  showMoreNews() {
    this.page ++;
    this.showLoadMore = (this.page + 1) * this.rowPerPage >= this.latestNews.length ? false : true;
  }

  getLatestNews() {
    this.newsService.getLatestNews()
      .subscribe(data => {
        this.latestNews = data;
    });
  }
}
