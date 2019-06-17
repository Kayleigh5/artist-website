import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imageVisibility = 'hidden';
  loadingDisplay: string;

  ngOnInit() {
  }

  dosomething() {
    this.imageVisibility = 'unset';
    this.loadingDisplay = 'none';
  }

}
