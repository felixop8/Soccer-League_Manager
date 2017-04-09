import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Team } from './team';
import { Players } from './players';

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

 deleteTeam(teamSelected){
     var reference = this.angularFire.database.object('/teams/'+ [teamSelected]);
     reference.remove();
 }

 addPlayer(newPlayer: Players, teamSelected){
     var adaRef = this.angularFire.database.list("teams/" + [teamSelected] + '/players');
     adaRef.push(newPlayer);
  }
 }
