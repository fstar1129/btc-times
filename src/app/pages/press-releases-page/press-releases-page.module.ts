import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import { PressReleasesPageComponent } from './press-releases-page.component';
import { PressReleasePlanComponent } from './press-release-plan/press-release-plan.component';
import { PressReleasePlanSelectionComponent } from './press-release-plan-selection/press-release-plan-selection.component';


@NgModule({
    imports: [SharedModule],
    declarations: [
        PressReleasesPageComponent,
        PressReleasePlanComponent,
        PressReleasePlanSelectionComponent
    ],
})

export class PressReleasesPageModule {
    
}
