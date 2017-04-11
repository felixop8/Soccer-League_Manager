import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { Router } from '@angular/router';
import { BoardMembers } from '../board-members';

@Component({
  selector: 'app-add-board-member',
  templateUrl: './add-board-member.component.html',
  styleUrls: ['./add-board-member.component.css'],
  providers: [LeagueService]
})
export class AddBoardMemberComponent implements OnInit {
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

submitForm(name: string, role: string, photoProfile: string) {
  const newMember: BoardMembers = new BoardMembers (
    name,
    role,
    photoProfile
  )
  this.leagueService.addMember(newMember, this.teamSelected);
  }
}
