import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class LeagueService {
  teams: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.teams = angularFire.database.list('teams');
  }

  getTeams(){
    return this.teams;
  }

  getTeamById(teamId: string){
    return this.angularFire.database.object('teams/' + teamId);
  }

}
