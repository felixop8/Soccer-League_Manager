import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { PlayersComponent } from './players/players.component';
import { BoardMembersComponent } from './board-members/board-members.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddBoardMemberComponent } from './add-board-member/add-board-member.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { DeleteBoardMemberComponent } from './delete-board-member/delete-board-member.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';


const appRoutes: Routes = [
  {
      path: '',
      component: TeamListComponent
  },
  {
      path: 'admin',
      component: AdminComponent,
      children: [
        {
            path: 'deleteTeam',
            component: DeleteTeamComponent
        },
        {
            path: 'addTeam',
            component: AddTeamComponent
        },
        {
            path: 'addPlayer',
            component: AddPlayerComponent
        },
        {
            path: 'addBoardMember',
            component: AddBoardMemberComponent
        },
        {
            path: 'deletePlayer',
            component: DeletePlayerComponent
        },
        {
            path: 'deleteBoardMember',
            component: DeleteBoardMemberComponent
        },
        {
            path: 'updatePlayer',
            component: EditPlayerComponent
        }
      ]
  },
  {
      path: 'team/:id',
      component: TeamComponent,
      children: [
        {  path: 'about',
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
