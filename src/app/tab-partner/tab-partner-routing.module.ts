import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPartnerPage } from './tab-partner.page';

const routes: Routes = [
  {
    path: '',
    component: TabPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPartnerPageRoutingModule {}
