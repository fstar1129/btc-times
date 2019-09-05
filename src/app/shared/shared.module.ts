import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeroCardComponent} from './components/hero-card/hero-card.component';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {HeroLoadingComponent} from './components/hero-loading/hero-loading.component';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';
import {LoadingPlaceholderComponent} from './components/loading-placeholder/loading-placeholder.component';
import {CapitalizeFirstPipe} from './pipes/capitalize-first.pipe';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { AdsComponent } from './components/ads/ads.component';
import { FeaturedMiniViewItemComponent } from './components/featured-mini-view-item/featured-mini-view-item.component';
import { MainNewsletterComponent } from './components/main-newsletter/main-newsletter.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { StoryTipsComponent } from './components/story-tips/story-tips.component';
import { PressReleasesComponent } from './components/press-releases/press-releases.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    NgxExampleLibraryModule,
    NgxScrollToFirstInvalidModule,
    LazyLoadImageModule
  ],
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    SpinnerComponent,
    HeroCardComponent,
    HeroLoadingComponent,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    FeaturedCardComponent,
    AdsComponent,
    FeaturedMiniViewItemComponent,
    MainNewsletterComponent,
    LatestPostComponent,
    PostCardComponent,
    StoryTipsComponent,
    PressReleasesComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxExampleLibraryModule,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    SpinnerComponent,
    HeroCardComponent,
    HeroLoadingComponent,
    NgxScrollToFirstInvalidModule,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    LazyLoadImageModule,
    FeaturedCardComponent,
    AdsComponent,
    FeaturedCardComponent,
    FeaturedMiniViewItemComponent,
    MainNewsletterComponent,
    LatestPostComponent,
    PostCardComponent,
    StoryTipsComponent,
    PressReleasesComponent
  ]
})

export class SharedModule {
}
