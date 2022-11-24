import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabNewsPageRoutingModule } from './tab-news-routing.module';

import { TabNewsPage } from './tab-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabNewsPageRoutingModule
  ],
  declarations: [TabNewsPage]
})
export class TabNewsPageModule {}
