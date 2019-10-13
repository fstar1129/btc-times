import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import { FaucetPageComponent } from './faucet-page.component';


@NgModule({
  declarations: [FaucetPageComponent],
  imports: [
    SharedModule,
  ]
})
export class FaucetPageModule { }
