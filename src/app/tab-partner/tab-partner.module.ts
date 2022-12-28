import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPartnerPageRoutingModule } from './tab-partner-routing.module';

import { TabPartnerPage } from './tab-partner.page';
import {PartnerCardComponent} from './partner-card/partner-card.component';
import {TabProjectsPageModule} from "../tab-projects/tab-projects.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabPartnerPageRoutingModule,
        TabProjectsPageModule
    ],
    declarations: [TabPartnerPage, PartnerCardComponent]
})
export class TabPartnerPageModule {}
