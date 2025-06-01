import { Component, AfterViewInit, ViewChild, OnInit, Input } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit, OnInit {

  constructor(private deviceService: DeviceDetectorService, private contactService: ContactService) { }

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
      this.backgroundSrc = "../assets/images/contact-background-tablet.JPG";
    } else if (isMobile) {
      this.backgroundSrc = "../assets/images/contact-background-mobile.JPG"
    } else {
      this.backgroundSrc = "../assets/images/contact-background.JPG"
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
      this.innerHtml = this.contactService.getReverseMail();
      this.link = this.contactService.getReverseMailTo();
      this.loading = false;
      if (click) {
        window.location.href = this.link;
      }
    }
  }

  activate(event) {
    this.make(true);
  }

  finishImageLoad() {
    this.loadingDisplay = 'none';
    this.imageVisibility = 'unset';
  }

}
