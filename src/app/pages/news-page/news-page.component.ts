import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  sideAds: any;
  constructor() { }

  ngOnInit() {
    this.sideAds = {src: "https://s3.cointelegraph.com/storage/uploads/view/f35441e48fc1710826b249d4f5bc5308.jpg"};
  }

}
