import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
// import { BoardMembers } from '../board-members';
// import { Info } from '../info';
// import { Players } from '../players';


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
    let newTeam: Team = new Team(
        new BoardMembers(
          "",
          "",
          "",
        ),
        new Info(
          name,
          description,
          logo
      ),
      new Players(
        "",
        "",
        ""
      )

    );
  }

}
