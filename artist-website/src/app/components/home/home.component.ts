import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }

  @ViewChild('page') page: ElementRef;

  @Input('epk') epk: boolean;
  @Input('portfolio') portfolio: boolean;

  imageVisibility = 'hidden';
  loadingDisplay: string;
  src: string;

  ngOnInit() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isTablet) {
      this.src = "../assets/images/final-tablet.jpg";
    } else if (isMobile) {
      this.src = "../assets/images/final-mobile.jpg"
    } else {
      this.src = "../assets/images/final.jpg"
    }
  }

  finishLoad() {
    this.loadingDisplay = 'none';
    this.imageVisibility = 'unset';
    this.page.nativeElement.classList.remove("full-height");
  }

}
