import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../interfaces/news.model';

@Component({
  selector: 'app-featured-mini-view-item',
  templateUrl: './featured-mini-view-item.component.html',
  styleUrls: ['./featured-mini-view-item.component.scss']
})
export class FeaturedMiniViewItemComponent implements OnInit {

  @Input() item: any;
  content: string;
  data: any;
  constructor() { }

  ngOnInit() {
    if (this.item !== undefined) {
      this.content = this.makeEllipsis(this.item.content);
    }
  }

  makeEllipsis(text: string): string {
    if (text.length > 100) {
      return text.slice(0, 130) + "...";
    } else {
      return text;
    }
  }

}
