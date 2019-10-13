import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import { NewsPageComponent } from './news-page.component';
import { NewsComponent } from './news/news.component';
import { CategoriesComponent } from './categories/categories.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { SideSubmissionComponent } from './side-submission/side-submission.component';
import { RelatedNewsComponent } from './related-news/related-news.component';


@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    declarations: [
        NewsPageComponent,
        NewsComponent,
        CategoriesComponent,
        TopStoriesComponent,
        TopCategoriesComponent,
        SideSubmissionComponent,
        RelatedNewsComponent,
    ],
})

export class NewsPageModule {
    
}
