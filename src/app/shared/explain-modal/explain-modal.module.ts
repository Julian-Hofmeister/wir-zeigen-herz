import {ExplainModalComponent} from './explain-modal.component';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {IonicModule} from "@ionic/angular";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../app.module";
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [ExplainModalComponent],
  imports: [
    IonicModule,
    TranslateModule,


    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ExplainModalComponent,
    MatIconModule,
  ]
})
export class ExplainModalModule {}
