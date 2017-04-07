import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {
      path: '',
      component: TeamListComponent
  },
  {
      path: 'team/:id',
      component: TeamComponent,
      children: [
        {  path:'',
          component: AboutComponent}
      ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
