import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Team } from './team';

@Injectable()
export class LeagueService {
  teams: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.teams = angularFire.database.list('teams');
  }

  getTeams() {
    return this.teams;
  }

  getTeamById(teamId) {
    return this.angularFire.database.object('teams/' + teamId);
  }

  addTeam(newTeam: Team) {
   this.teams.push(newTeam);
 }

}
