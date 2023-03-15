import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
        {
        path: 'tab-projects',
        loadChildren: () => import('../tab-projects/tab-projects.module').then(m => m.TabProjectsPageModule)
      },
      {
        path: 'tab-partner',
        loadChildren: () => import('../tab-partner/tab-partner.module').then(m => m.TabPartnerPageModule)
      },
      {
        path: 'tab-home',
        loadChildren: () => import('../tab-home/tab-home.module').then(m => m.TabHomePageModule)
      },
      {
        path: 'tab-team',
        loadChildren: () => import('../tab-team/tab-team.module').then(m => m.TabTeamPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
