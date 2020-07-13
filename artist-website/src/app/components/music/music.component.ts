import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  moreIsVisible = false;

  ngOnInit() {
  }

  open(url: string) {
    window.open(url, "_blank");
  }

  toggleMoreVisible() {
    this.moreIsVisible = ! this.moreIsVisible;
  }

}
