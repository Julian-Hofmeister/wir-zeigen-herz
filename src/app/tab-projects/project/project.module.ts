import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectPageRoutingModule } from './project-routing.module';

import { ProjectPage } from './project.page';
import {ActionButtonModule} from "../../shared/action-button/action-button.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProjectPageRoutingModule,
        ActionButtonModule,
        TranslateModule
    ],
  declarations: [ProjectPage]
})
export class ProjectPageModule {}
