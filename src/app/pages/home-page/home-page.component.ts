import {Component, OnInit} from '@angular/core';
import {Hero} from '../../modules/heroes/shared/hero.model';
import {HeroService} from '../../modules/heroes/shared/hero.service';
import {AppConfig} from '../../configs/app.config';
import {Observable} from 'rxjs';
import {defaultIfEmpty, map} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  // heroes$: Observable<Hero[]>;
  featuredCard: any;
  ads: any;
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    // this.featuredCard = this.heroService.getHeroes().pipe(
    //   map((heroes) => heroes.slice(0, AppConfig.topHeroesLimit)),
    //   defaultIfEmpty([])
    // );
    this.featuredCard = {url: "https://static.coindesk.com/wp-content/uploads/2019/09/43340625971_d6d7d46688_k-860x430.jpg"};
    this.ads = {src: "https://s3.cointelegraph.com/storage/uploads/view/8940389fc3874f52c7ab78e44e92e4d2.jpg"};
  }
}
