import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from '../players';
import { LeagueService } from '../league.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
  providers: [LeagueService]
})
export class EditTeamComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  teamSelected;
  myItems: any[] = [];
  showForm = null;
  teamUpdated;

  constructor(private router: Router, private leagueService: LeagueService, private angularFire: AngularFire) { }



  onChange(optionFromMenu) {
    this.teamSelected = null;
    this.teamSelected = optionFromMenu;
  }

  updateTeam() {
    this.showForm = true;
    this.angularFire.database.object('/teams/' + [this.teamSelected] + '/info/').subscribe(dataLastEmittedFromObserver => {
    this.teamUpdated = dataLastEmittedFromObserver;
     });
  }


  finishedEditing(teamUpdated) {
    this.leagueService.updateTeam(teamUpdated, this.teamSelected);
    this.showForm = null;
  }

  ngOnInit() {
    this.teams = this.leagueService.getTeams();
  }

}
