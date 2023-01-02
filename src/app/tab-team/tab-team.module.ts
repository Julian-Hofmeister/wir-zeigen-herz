import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabTeamPageRoutingModule } from './tab-team-routing.module';

import { TabTeamPage } from './tab-team.page';
import {TeamCardComponent} from './team-card/team-card.component';
import {TabProjectsPageModule} from '../tab-projects/tab-projects.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../app.module';
import {HttpClient} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabTeamPageRoutingModule,
        TabProjectsPageModule,

      TranslateModule.forChild({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      })

    ],
  declarations: [TabTeamPage, TeamCardComponent]
})
export class TabTeamPageModule {}
