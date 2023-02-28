import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TabTeamPageModule} from "./tab-team/tab-team.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./tab-team/tab-team.module').then(m => m.TabTeamPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./shared/slider/slider.module').then( m => m.SliderPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
