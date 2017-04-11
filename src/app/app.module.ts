import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
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

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamComponent,
    AboutComponent,
    PlayersComponent,
    BoardMembersComponent,
    AdminComponent,
    DeleteTeamComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AddBoardMemberComponent,
    DeletePlayerComponent,
    DeleteBoardMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
