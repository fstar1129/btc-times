import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import { AdvertisePromoComponent } from './advertise-promo/advertise-promo.component';
import { AdvertisePromoFormComponent } from './advertise-promo-form/advertise-promo-form.component';
import { AdvertiseAdsComponent } from './advertise-ads/advertise-ads.component';
import { AdvertiseAdsItemComponent } from './advertise-ads-item/advertise-ads-item.component';
import { AdvertiseAdvantageComponent } from './advertise-advantage/advertise-advantage.component';
import { AdvertiseAdvantageItemComponent } from './advertise-advantage-item/advertise-advantage-item.component';
import { AdvertiseFormatsComponent } from './advertise-formats/advertise-formats.component';
import { AdvertiseFormatsItemComponent } from './advertise-formats-item/advertise-formats-item.component';


@NgModule({
    imports: [SharedModule],
    declarations: [
        AdvertisePromoComponent,
        AdvertisePromoFormComponent,
        AdvertiseAdsComponent,
        AdvertiseAdsItemComponent,
        AdvertiseAdvantageComponent,
        AdvertiseAdvantageItemComponent,
        AdvertiseFormatsComponent,
        AdvertiseFormatsItemComponent,
    ],
    exports: [
        AdvertisePromoComponent,
        AdvertisePromoFormComponent,
        AdvertiseAdsComponent,
        AdvertiseAdsItemComponent,
        AdvertiseAdvantageComponent,
        AdvertiseAdvantageItemComponent,
        AdvertiseFormatsComponent,
        AdvertiseFormatsItemComponent,
    ]
})

export class AdvertisePageModule {
    
}
