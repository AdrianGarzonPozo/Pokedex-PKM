import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilePkm',
  templateUrl: './profilePkm.component.html',
  styleUrls: ['./profilePkm.component.css']
})
export class ProfilePkmComponent implements OnInit {

  pkmId: string = '';

  constructor(router: Router) {
    router.events.subscribe();
    this.pkmId=router.url.split("/")[2];
  }

  ngOnInit() {
    console.log(this.pkmId);
  }

}
