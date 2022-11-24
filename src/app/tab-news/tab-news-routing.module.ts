import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNewsPage } from './tab-news.page';

const routes: Routes = [
  {
    path: '',
    component: TabNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNewsPageRoutingModule {}
