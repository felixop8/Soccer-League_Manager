import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { LeagueService } from '../league.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [LeagueService]
})
export class PlayersComponent implements OnInit {
  teamId: any;
  playersToDisplay;
  myItems: any[] = [];

  constructor(private route: ActivatedRoute, private location: Location, private leagueService: LeagueService, private router: Router, private angularFire: AngularFire) { }

  ngOnInit() {
    this.route.parent.params.forEach((urlParameters) =>  {
            this.teamId = urlParameters['id'];
    });
     this.playersToDisplay = this.leagueService.getTeamById(this.teamId);


     this.angularFire.database.list('/teams/' + [this.teamId] + '/players', { preserveSnapshot: true})
     .subscribe(snapshots=>{
         snapshots.forEach(snapshot => {
           this.myItems.push(snapshot.val());
         });
     })
   }
  }
