import { Component, AfterViewInit, ViewChild, OnInit, Input } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit, OnInit {

  constructor(private deviceService: DeviceDetectorService) { }

  @ViewChild('link') contact;

  @Input('epk') epk: boolean;

  innerHtml: string;
  link: string;
  loading = true;

  imageVisibility = 'hidden';
  loadingDisplay: string;

  backgroundSrc: string;

  ngOnInit() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isTablet) {
      this.backgroundSrc = "../assets/images/contact-background-tablet.jpg";
    } else if (isMobile) {
      this.backgroundSrc = "../assets/images/contact-background-mobile.jpg"
    } else {
      this.backgroundSrc = "../assets/images/contact-background.jpg"
    }
  }

  ngAfterViewInit() {
    this.showContact();

  }

  showContact() {
    setTimeout(() => {
      this.make();
    }, 10000);
  }

  make(click?: boolean): void {
    if (!this.innerHtml) {
      const reverse = ['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 't', 'c', 'a', 't', 'n', 'o', 'c'];
      this.innerHtml = this.replace(reverse).reverse().join('');
      const reverseLink = ['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 't', 'c', 'a', 't', 'n', 'o', 'c', ':', 'o', 't', 'l', 'i', 'a', 'm'];
      this.link = this.replace(reverseLink).reverse().join('');
      this.loading = false;
      if (click) {
        window.location.href = this.link;
      }
    }
  }

  activate(event) {
    this.make(true);
  }

  replace(list: Array<string>): Array<string> {
    let newList = list;
    for (let i = 0; i < list.length; i++) {
      if (list[i] === '$') {
        newList[i] = '@';
      }
    }
    return newList;
  }

  finishImageLoad() {
    this.loadingDisplay = 'none';
    this.imageVisibility = 'unset';
  }

}
