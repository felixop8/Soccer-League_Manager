import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [LeagueService]
})
export class PlayersComponent implements OnInit {
  teamId: any;
  playersToDisplay;
  playersProvider;
  arrayPlayers: any[] = [];

  constructor(private route: ActivatedRoute, private location: Location, private leagueService: LeagueService, private router: Router) { }

  ngOnInit() {
    this.route.parent.params.forEach((urlParameters) =>  {
            this.teamId = urlParameters['id'];
    });
     this.playersToDisplay = this.leagueService.getTeamById(this.teamId);

     var projects = this.playersToDisplay.subscribe(dataLastEmittedFromObserver => {
    this.playersProvider = dataLastEmittedFromObserver;

    var keyHolder = Object.keys(this.playersProvider.players)
    
    for (var i = 0; i < keyHolder.length; i++) {
      this.arrayPlayers.push(this.playersProvider.players[keyHolder[i]]);
    }
  });

}
}
