import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { BoardMembers } from '../board-members';
import { Info } from '../info';
import { Players } from '../players';
import { Location } from '@angular/common';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { PlayersTwo } from '../players-two';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers: [LeagueService]
})
export class AddTeamComponent implements OnInit {
  teamService;

  constructor(private location: Location, private leagueService: LeagueService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, logo: string) {
    const newTeam: Team = new Team(
        new BoardMembers (
          'Jose',
          'img path',
          'el presidente',
        ),
        new Info (
          name,
          description,
          logo
        ),
        new Players (
          'juan',
          'jose',
          'manuel',
          'yo qus'

      )
    );

    this.leagueService.addTeam(newTeam);
  }

}
