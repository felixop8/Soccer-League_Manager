import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from '../players';
import { LeagueService } from '../league.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-delete-board-member',
  templateUrl: './delete-board-member.component.html',
  styleUrls: ['./delete-board-member.component.css'],
  providers: [LeagueService]
})
export class DeleteBoardMemberComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  teamSelected;
  memberSelected;
  myItems: any[] = [];

  constructor(private router: Router, private leagueService: LeagueService, private angularFire: AngularFire) { }

  onChange(optionFromMenu) {
    this.teamSelected = null;
    this.myItems = [];
    this.teamSelected = optionFromMenu;

    this.angularFire.database.list('/teams/' + [this.teamSelected] + '/boardMembers', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          // var opo = snapshot.key;
          this.myItems.push([snapshot.key,snapshot.val()]);


        });
    })
  }

  onChangePlayer(optionFromMenu) {
    this.memberSelected = null; 
    this.memberSelected = optionFromMenu;
  }

  deleteMember() {
    this.leagueService.deleteMember(this.memberSelected, this.teamSelected);
  }

  ngOnInit() {
    this.teams = this.leagueService.getTeams();
  }



}
