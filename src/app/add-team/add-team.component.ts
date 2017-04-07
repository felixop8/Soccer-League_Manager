import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, logo: string) {
    var newTeam: Team = new Team(name, description, logo);
  }

}
