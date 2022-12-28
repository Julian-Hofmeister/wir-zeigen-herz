import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { TabHomePage } from './tab-home.page';
import {ActionButtonModule} from '../shared/action-button/action-button.module';
import {TabProjectsPageModule} from "../tab-projects/tab-projects.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabHomePageRoutingModule,
        ActionButtonModule,
        TabProjectsPageModule
    ],
  declarations: [TabHomePage]
})
export class TabHomePageModule {}
