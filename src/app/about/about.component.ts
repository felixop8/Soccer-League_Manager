import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [LeagueService]
})
export class AboutComponent implements OnInit {
  teamId;
  aboutToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private leagueService: LeagueService, private router: Router) { }

  ngOnInit() {
    this.route.parent.params.forEach((urlParameters) =>  {
            this.teamId = urlParameters['id'];
    });

    this.aboutToDisplay = this.leagueService.getTeamById(this.teamId);
  }

}
