import {ActionButtonComponent} from './action-button.component';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {IonicModule} from "@ionic/angular";


@NgModule({
    declarations: [ActionButtonComponent],
    imports: [
        IonicModule
    ],
    exports: [
        ActionButtonComponent,
        MatIconModule,
    ]
})
export class ActionButtonModule {}
