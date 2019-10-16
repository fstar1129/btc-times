import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { AboutUsPageComponent } from './about-us-page.component';
import { AboutUsHeaderComponent } from './about-us-header/about-us-header.component';
import { AboutUsMainComponent } from './about-us-main/about-us-main.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutTeamItemComponent } from './about-team-item/about-team-item.component';
import { AboutSponsorComponent } from './about-sponsor/about-sponsor.component';

@NgModule({
  declarations: [AboutUsPageComponent, AboutUsHeaderComponent, AboutUsMainComponent, AboutTeamComponent, AboutTeamItemComponent, AboutSponsorComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AboutUsPageModule { }
