import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerzbotschafterPage } from './herzbotschafter.page';

const routes: Routes = [
  {
    path: '',
    component: HerzbotschafterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerzbotschafterPageRoutingModule {}
