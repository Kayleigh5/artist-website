import { Component, OnInit } from '@angular/core';
import * as globals from '../../globals/live-dates';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor() { }

  liveDates: Array<Object>;

  ngOnInit() {
    this.liveDates = globals.liveDates;
  }

  openLink(date) {
    if (date.link) {
      window.open(date.link, "_blank");
    } else {
      window.open("https://www.youtube.com/c/KayleighBeard5", "_blank")
    }
  }

}
