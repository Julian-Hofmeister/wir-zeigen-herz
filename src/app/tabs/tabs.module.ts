import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {TabHomePageModule} from '../tab-home/tab-home.module';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TabHomePageModule,
    MatIconModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
