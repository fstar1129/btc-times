import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { CareersPageComponent } from './careers-page.component';
import { CareersHeaderComponent } from './careers-header/careers-header.component';
import { CareersIntroComponent } from './careers-intro/careers-intro.component';
import { CareersCurrentOpeningComponent } from './careers-current-opening/careers-current-opening.component';
import { CurrentOpeningItemComponent } from './current-opening-item/current-opening-item.component';

@NgModule({
  declarations: [CareersPageComponent, CareersHeaderComponent, CareersIntroComponent, CareersCurrentOpeningComponent, CurrentOpeningItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CareersPageModule { }
