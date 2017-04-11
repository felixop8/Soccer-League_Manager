import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Team } from './team';
import { Players } from './players';
import { BoardMembers } from './board-members';

@Injectable()
export class LeagueService {
  teams: FirebaseListObservable<any[]>;
  playersToDisplay;
  arrayPlayers: any[];
  constructor(private angularFire: AngularFire) {
    this.teams = angularFire.database.list('teams');
  }

  getTeams() {
    return this.teams;
  }

  deletePlayer(playerSelected, teamSelected) {
    var reference = this.angularFire.database.object('teams/' + [teamSelected] + '/players/' + [playerSelected]);
    reference.remove();
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

  addMember(newMember: BoardMembers, teamSelected){
    var adaRef = this.angularFire.database.list("teams/" + [teamSelected] + '/boardMembers');
    adaRef.push(newMember);
  }
 }
