import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { Router } from '@angular/router';
import { Players } from '../players';

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

submitForm(name: string, bio: string, position: string, photoProfile: string) {
  const newPlayer: Players = new Players (
    name,
    bio,
    position,
    photoProfile
  )
  this.leagueService.addPlayer(newPlayer, this.teamSelected);


}

}
