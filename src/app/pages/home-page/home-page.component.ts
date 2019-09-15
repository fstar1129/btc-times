import {Component, OnInit} from '@angular/core';
import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  featuredCards: any;
  featuredCard: any;
  ads: any;
  sideAds: any;
  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    // this.newsService.getFeaturedNews()
    //   .subscribe(data => {
    //     this.featuredCards = data;
    //     console.log("ok", this.featuredCards);
    //   });
    
    this.featuredCard = {url: "https://static.coindesk.com/wp-content/uploads/2019/09/43340625971_d6d7d46688_k-860x430.jpg"};
    this.ads = {src: "https://s3.cointelegraph.com/storage/uploads/view/8940389fc3874f52c7ab78e44e92e4d2.jpg"};
    this.sideAds = {src: "https://s3.cointelegraph.com/storage/uploads/view/f35441e48fc1710826b249d4f5bc5308.jpg"};
  }
}
