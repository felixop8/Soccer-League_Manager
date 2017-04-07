import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';


const appRoutes: Routes = [
  {
      path: '',
      component: TeamListComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
