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
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
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
import { NewsComponent } from './components/news/news.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { SideSubmissionComponent } from './components/side-submission/side-submission.component';
import { RelatedNewsComponent } from './components/related-news/related-news.component';

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
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    FeaturedCardComponent,
    AdsComponent,
    FeaturedMiniViewItemComponent,
    MainNewsletterComponent,
    LatestPostComponent,
    PostCardComponent,
    StoryTipsComponent,
    PressReleasesComponent,
    NewsComponent,
    CategoriesComponent,
    TopStoriesComponent,
    TopCategoriesComponent,
    SideSubmissionComponent,
    RelatedNewsComponent
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
    PressReleasesComponent,
    NewsComponent,
    CategoriesComponent,
    TopStoriesComponent,
    TopCategoriesComponent,
    SideSubmissionComponent,
    RelatedNewsComponent
  ]
})

export class SharedModule {
}
