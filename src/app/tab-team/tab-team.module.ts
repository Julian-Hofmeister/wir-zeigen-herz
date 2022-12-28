import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabTeamPageRoutingModule } from './tab-team-routing.module';

import { TabTeamPage } from './tab-team.page';
import {TeamCardComponent} from './team-card/team-card.component';
import {TabProjectsPageModule} from "../tab-projects/tab-projects.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabTeamPageRoutingModule,
        TabProjectsPageModule
    ],
  declarations: [TabTeamPage, TeamCardComponent]
})
export class TabTeamPageModule {}
