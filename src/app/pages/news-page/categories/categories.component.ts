import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  popularTags;

  constructor(
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getPopularTags();
  }

  getPopularTags() {
    this.newsService.getPopularTags()
      .subscribe(data => {
        this.popularTags = data;
    });
  }

}
