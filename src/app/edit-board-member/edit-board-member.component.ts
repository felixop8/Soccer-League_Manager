import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from '../players';
import { LeagueService } from '../league.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-edit-board-member',
  templateUrl: './edit-board-member.component.html',
  styleUrls: ['./edit-board-member.component.css'],
  providers: [LeagueService]
})

export class EditBoardMemberComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  teamSelected;
  memberSelected;
  myItems: any[] = [];
  showForm = null;
  memberUpdate;

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

  updateMember(member) {
    this.showForm = true;
    this.angularFire.database.object('/teams/' + [this.teamSelected] + '/boardMembers/' + [this.memberSelected]).subscribe(dataLastEmittedFromObserver => {
    this.memberUpdate = dataLastEmittedFromObserver;
     });
  }

  finishedEditing(memberUpdate) {
    this.leagueService.updateMember(memberUpdate, this.teamSelected);
    this.showForm = null;
    console.log(memberUpdate);
  }

  ngOnInit() {
    this.teams = this.leagueService.getTeams();
  }

}
