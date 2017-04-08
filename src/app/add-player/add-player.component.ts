import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  providers: [LeagueService]
})
export class AddPlayerComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  teamSelected;

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit() {
    this.teams = this.leagueService.getTeams();
  }

  onChange(optionFromMenu) {
  this.teamSelected = optionFromMenu;
  console.log(this.teamSelected);
}
}
