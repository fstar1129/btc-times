import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent implements OnInit {

  latestNews: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getLatestNews();
  }

  getLatestNews() {
    this.newsService.getLatestNews()
      .subscribe(data => {
        this.latestNews = data;
    });
  }
}
