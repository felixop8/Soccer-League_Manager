import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-members',
  templateUrl: './board-members.component.html',
  styleUrls: ['./board-members.component.css'],
  providers: [LeagueService]
})
export class BoardMembersComponent implements OnInit {
  teamId;
  boardMembersToDisplay;


  constructor(private route: ActivatedRoute, private location: Location, private leagueService: LeagueService, private router: Router) { }

  ngOnInit() {
    this.route.parent.params.forEach((urlParameters) =>  {
            this.teamId = urlParameters['id'];
    });
    this.boardMembersToDisplay = this.leagueService.getTeamById(this.teamId);
  }

}
