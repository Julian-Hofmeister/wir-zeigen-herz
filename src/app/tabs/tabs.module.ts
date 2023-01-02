import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {TabHomePageModule} from '../tab-home/tab-home.module';
import {MatIconModule} from '@angular/material/icon';
import {ActionButtonComponent} from '../shared/action-button/action-button.component';
import {ActionButtonModule} from '../shared/action-button/action-button.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        TabHomePageModule,
        MatIconModule,
        ActionButtonModule,
        TranslateModule
    ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
