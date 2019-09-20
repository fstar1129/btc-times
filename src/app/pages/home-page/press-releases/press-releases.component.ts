import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.scss']
})
export class PressReleasesComponent implements OnInit {

  pressReleases: any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getPressReleases();
  }

  getPressReleases() {
    this.newsService.getPressReleases()
      .subscribe(data => {
        this.pressReleases = data;
    });
  }
}
