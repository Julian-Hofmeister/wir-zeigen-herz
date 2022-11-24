import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabTeamPage } from './tab-team.page';

const routes: Routes = [
  {
    path: '',
    component: TabTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabTeamPageRoutingModule {}
