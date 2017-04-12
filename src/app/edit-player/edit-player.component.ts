import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from '../players';
import { LeagueService } from '../league.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [LeagueService]
})
export class EditPlayerComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  teamSelected;
  playerSelected;
  myItems: any[] = [];
  showForm = null;
  playerUpdated;

  constructor(private router: Router, private leagueService: LeagueService, private angularFire: AngularFire) { }

  onChange(optionFromMenu) {
    this.teamSelected = null;
    this.myItems = [];
    this.teamSelected = optionFromMenu;

    this.angularFire.database.list('/teams/' + [this.teamSelected] + '/players', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          // var opo = snapshot.key;
          this.myItems.push([snapshot.key,snapshot.val()]);


        });
    })
  }

  onChangePlayer(optionFromMenu) {

    this.playerSelected = null;
    this.playerSelected = optionFromMenu;
  }

  updatePlayer(felix) {
    this.showForm = true;
    this.angularFire.database.object('/teams/' + [this.teamSelected] + '/players/' + [this.playerSelected]).subscribe(dataLastEmittedFromObserver => {
    this.playerUpdated = dataLastEmittedFromObserver;
     });
  }

  finishedEditing(playerUpdated) {
    this.leagueService.updatePlayer(playerUpdated, this.teamSelected);
    this.showForm = null;
    console.log(playerUpdated);
  }

  ngOnInit() {
    this.teams = this.leagueService.getTeams();
  }

}
