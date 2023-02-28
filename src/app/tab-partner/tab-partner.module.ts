import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPartnerPageRoutingModule } from './tab-partner-routing.module';

import { TabPartnerPage } from './tab-partner.page';
import {TabProjectsPageModule} from "../tab-projects/tab-projects.module";
import {TranslateModule} from "@ngx-translate/core";
import {PartnerCardModule} from "../shared/partner-card/partner-card.module";
import {ActionButtonModule} from "../shared/action-button/action-button.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabPartnerPageRoutingModule,
        TabProjectsPageModule,
        TranslateModule,
        PartnerCardModule,
        ActionButtonModule
    ],
    declarations: [TabPartnerPage]
})
export class TabPartnerPageModule {}
