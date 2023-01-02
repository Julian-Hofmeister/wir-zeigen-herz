import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabNewsPageRoutingModule } from './tab-news-routing.module';

import { TabNewsPage } from './tab-news.page';
import {NewsCardComponent} from "./news-card/news-card.component";
import {TabProjectsPageModule} from "../tab-projects/tab-projects.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabNewsPageRoutingModule,
        TabProjectsPageModule,
        TranslateModule
    ],
    declarations: [TabNewsPage, NewsCardComponent]
})
export class TabNewsPageModule {}
