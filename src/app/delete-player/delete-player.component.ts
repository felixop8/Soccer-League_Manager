import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from '../players';
import { LeagueService } from '../league.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css'],
  providers: [LeagueService]
})
export class DeletePlayerComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  teamSelected;
  playerSelected;
  myItems: any[] = [];

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
    this.myItems = [];
    this.playerSelected = optionFromMenu;
  }

  deletePlayer() {
    this.leagueService.deletePlayer(this.playerSelected, this.teamSelected);
  }

  ngOnInit() {
    this.teams = this.leagueService.getTeams();
  }



}
