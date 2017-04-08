import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Team } from './team';
import { Players } from './players';

@Injectable()
export class LeagueService {
  teams: FirebaseListObservable<any[]>;
  allTeams;
  reference;
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

 addPlayer(newPlayer: Players, teamSelected){
   this.teams.subscribe(dataLastEmittedFromObserver => {
     this.allTeams = dataLastEmittedFromObserver;
     var keyHolder = Object.keys(this.allTeams);


    //  for (var i = 0; i < keyHolder.length; i++) {
    //    if (keyHolder[i] == teamSelected) {
         var reference = this.angularFire.database.object('/teams/'+ keyHolder[1] + '/players/');
         reference.remove();


    //    }
    //  }

   });
  }
 }
