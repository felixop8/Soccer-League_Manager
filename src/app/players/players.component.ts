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
  private sub: any;
  playersToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private leagueService: LeagueService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
            this.teamId = +params["id"];
    });
    this.playersToDisplay = this.leagueService.getTeamById(this.teamId);
    console.log(this.playersToDisplay);
  }

}
