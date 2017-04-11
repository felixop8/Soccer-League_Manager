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

  constructor(private router: Router, private leagueService: LeagueService) { }

  onChange(optionFromMenu) {
    this.teamSelected = optionFromMenu;
  }

  ngOnInit() {
      this.teams = this.leagueService.getTeams();
  }

  deleteTeam() {
    this.leagueService.deleteTeam(this.teamSelected);
  }
  
}
