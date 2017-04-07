import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [LeagueService]
})
export class TeamComponent implements OnInit {
  teamId: string;
  teamToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private leagueService: LeagueService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = urlParameters['id'];
    });

    this.teamToDisplay = this.leagueService.getTeamById(this.teamId);
  }

}
