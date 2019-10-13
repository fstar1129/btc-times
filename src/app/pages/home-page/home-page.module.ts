import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import { HomePageComponent } from './home-page.component';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { MainNewsletterComponent } from './main-newsletter/main-newsletter.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { StoryTipsComponent } from './story-tips/story-tips.component';
import { PressReleasesComponent } from './press-releases/press-releases.component';


@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        HomePageComponent,
        FeaturedCardComponent,
        MainNewsletterComponent,
        LatestPostComponent,
        StoryTipsComponent,
        PressReleasesComponent,
    ],
})

export class HomePageModule {
    
}
