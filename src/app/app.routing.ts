import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';


const appRoutes: Routes = [
  {
      path: '',
      component: TeamListComponent
  },
  {
      path: 'team/:id',
      component: TeamComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
