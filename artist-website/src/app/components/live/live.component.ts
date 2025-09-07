import { Component, OnInit } from '@angular/core';
import * as globals from '../../globals/live-dates';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }

  liveDates: Array<Object>;
  src = '../assets/images/kayleighbeard-simplon-Ioanalorgu.JPG';

  imageVisibility = 'hidden';
  loadingDisplay: string;

  ngOnInit() {
    this.liveDates = globals.liveDates;
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isTablet) {
      this.src = "../assets/images/kayleighbeard-simplon-Ioanalorgu-tablet.JPG";
    } else if (isMobile) {
      this.src = "../assets/images/kayleighbeard-simplon-Ioanalorgu-mobile.JPG";
    } else {
      this.src = "../assets/images/kayleighbeard-simplon-Ioanalorgu.JPG";
    }
  }

  openLink(date) {
    if (date.link) {
      window.open(date.link, "_blank");
    } else {
      window.open("https://www.youtube.com/c/KayleighBeard5", "_blank")
    }
  }

  finishLoad() {
    this.loadingDisplay = 'none';
    this.imageVisibility = 'unset';
  }

  isInPast(string) {
    const date = new Date(string);
    const currentDate = new Date();
    console.log(string, date, currentDate);
    if (date < currentDate) {
      return true;
    }
    return false;
  }

}
