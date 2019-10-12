import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { FaucetPageComponent } from './faucet-page.component';


@NgModule({
  declarations: [FaucetPageComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FaucetPageModule { }
