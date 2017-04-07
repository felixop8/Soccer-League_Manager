import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [LeagueService]

})
export class TeamListComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;


  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.teams = this.leagueService.getTeams(); 
  }

}
