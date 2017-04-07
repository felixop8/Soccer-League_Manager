import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teamId: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
            this.teamId = +params["id"];
    });
    console.log(this.teamId);
  }

}
