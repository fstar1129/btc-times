import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {

  data: any;
  featuredNews: any;
  constructor(
    private route: Router,
    private newsService: NewsService
  ) { 
    
  }

  ngOnInit() {
    this.getFeaturedNews();
  }

  getFeaturedNews() {
    this.newsService.getFeaturedNews()
      .subscribe(data => {
        this.data = data;
        this.featuredNews = this.data[0].thumbnail.url;
    });
  }
}
