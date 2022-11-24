import {ActionButtonComponent} from './action-button.component';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ ActionButtonComponent],
  exports: [
    ActionButtonComponent,
    MatIconModule,
  ]
})
export class ActionButtonModule {}
