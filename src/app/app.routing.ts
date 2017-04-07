import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { PlayersComponent } from './players/players.component';
import { BoardMembersComponent } from './board-members/board-members.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';


const appRoutes: Routes = [
  {
      path: '',
      component: TeamListComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'deleteTeam',
      component: DeleteTeamComponent
  },
  {
      path: 'team/:id',
      component: TeamComponent,
      children: [
        {  path:'about',
          component: AboutComponent
        },
        {
           path: 'players',
           component: PlayersComponent
        },
        {
           path: 'boardMembers',
           component: BoardMembersComponent
        }
      ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
