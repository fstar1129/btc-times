import {Component, OnInit} from '@angular/core';
import { NewsService } from '../../shared/services/news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  featuredNewsItems: [];
  featuredNews: any;
  pressReleases: any;
  ads: any;
  sideAds: any;
  data: any;
  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getFeaturedNewsItems();

    this.ads = {src: "https://s3.cointelegraph.com/storage/uploads/view/8940389fc3874f52c7ab78e44e92e4d2.jpg"};
    this.sideAds = {src: "https://s3.cointelegraph.com/storage/uploads/view/f35441e48fc1710826b249d4f5bc5308.jpg"};
  }


  getFeaturedNewsItems() {
    this.newsService.getFeaturedNewsItems()
      .subscribe(data => {
        this.data = data;
        // this.featuredNewsItems = this.formatNews(this.data);
        this.featuredNewsItems = this.data;
    });
  }


  showMoreNews() {

  }

  // formatNews(data: any) {
  //   let formatedData: [];

  //   formatedData = data.map(item => {
  //     let formatedDataItem: News = new News(item);
  //     return {
  //       id: formatedDataItem.id,
  //       title: formatedDataItem.title,
  //       content: formatedDataItem.content,
  //       updatedAt: formatedDataItem.updatedAt,
  //       createdAt: formatedDataItem.createdAt,
  //       editorName: formatedDataItem.editorName,
  //       thumbnailUrl: formatedDataItem.thumbnailUrl,
  //     };
  //   });
    
  //   return formatedData;
  // }
}
