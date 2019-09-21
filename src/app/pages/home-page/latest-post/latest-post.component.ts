import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent implements OnInit {

  @Input() page: number;
  @Output() getShowMoreBtnStatus = new EventEmitter();
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

  ngOnChanges(changes: SimpleChanges) {
    const page: SimpleChange = changes.page;
    if (page.isFirstChange()) {
      console.log("its first change!")
      
    } else {
      this.showLoadMore = (page.currentValue + 1) * this.rowPerPage >= this.latestNews.length ? false : true;
      console.log(this.showLoadMore);
      this.getShowMoreBtnStatus.emit(this.showLoadMore);
    }
  }

  getLatestNews() {
    this.newsService.getLatestNews()
      .subscribe(data => {
        this.latestNews = data;
    });
  }
}
