import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { TabHomePage } from './tab-home.page';
import {ActionButtonModule} from '../shared/action-button/action-button.module';
import {TabProjectsPageModule} from "../tab-projects/tab-projects.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../app.module";
import {HttpClient} from "@angular/common/http";
import {ExplainModalModule} from "../shared/explain-modal/explain-modal.module";
import {NewsCardComponent} from "./news-card/news-card.component";
import {PartnerCardComponent} from "../shared/partner-card/partner-card.component";
import {PartnerCardModule} from "../shared/partner-card/partner-card.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabHomePageRoutingModule,
        ActionButtonModule,
      PartnerCardModule,
      ExplainModalModule,
        TabProjectsPageModule,
        TranslateModule,


      TranslateModule.forChild({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      })
    ],
    declarations: [TabHomePage, NewsCardComponent]
})
export class TabHomePageModule {}
