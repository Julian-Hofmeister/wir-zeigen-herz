import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProjectsPageRoutingModule } from './tab-projects-routing.module';

import { TabProjectsPage } from './tab-projects.page';
import {ProjectCardComponent} from './project-card/project-card.component';
import {ActionButtonModule} from '../shared/action-button/action-button.module';
import {PageHeaderComponent} from "../shared/page-header/page-header.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabProjectsPageRoutingModule,
        ActionButtonModule,
        TranslateModule
    ],
  exports: [
    ProjectCardComponent,
    PageHeaderComponent
  ],
  declarations: [TabProjectsPage, ProjectCardComponent, PageHeaderComponent]
})
export class TabProjectsPageModule {}
