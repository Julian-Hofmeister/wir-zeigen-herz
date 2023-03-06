import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderPageRoutingModule } from './slider-routing.module';

import { SliderPage } from './slider.page';
import {TranslateModule} from "@ngx-translate/core";
import {ActionButtonModule} from "../action-button/action-button.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderPageRoutingModule,
    TranslateModule,
    ActionButtonModule
  ],
  declarations: [SliderPage]
})
export class SliderPageModule {}
