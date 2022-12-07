import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabProjectsPage } from './tab-projects.page';

const routes: Routes = [
  {
    path: '',
    component: TabProjectsPage
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabProjectsPageRoutingModule {}
