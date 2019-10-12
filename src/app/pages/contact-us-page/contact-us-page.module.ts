import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { ContactUsPageComponent } from './contact-us-page.component';
import { ContactUsHeaderComponent } from './contact-us-header/contact-us-header.component';
import { ContactUsMainComponent } from './contact-us-main/contact-us-main.component';

@NgModule({
  declarations: [ContactUsPageComponent, ContactUsHeaderComponent, ContactUsMainComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContactUsPageModule { }
