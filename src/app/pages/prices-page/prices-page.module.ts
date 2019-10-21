import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PricesPageComponent } from './prices-page.component';
import { ChartComponent } from './chart/chart.component';
import { ChartModule } from 'angular-highcharts';
@NgModule({
  declarations: [PricesPageComponent, ChartComponent],
  imports: [
    ChartModule,
    CommonModule,
    SharedModule
  ]
})
export class PricesPageModule { }
