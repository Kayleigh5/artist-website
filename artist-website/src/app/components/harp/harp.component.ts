import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-harp',
  templateUrl: './harp.component.html',
  styleUrls: ['./harp.component.css']
})
export class HarpComponent {

  constructor(private contactService: ContactService) { }

  innerHtmlMail = "e-mail";
  linkMail: string;
  isEmailSet = false;

  innerHtmlPhone = "tel";

  ngAfterViewInit() {
    this.showContact();

  }

  showContact() {
    setTimeout(() => {
      this.make();
      this.makePhone();
    }, 10000);
  }

  make(): void {
    this.innerHtmlMail = this.contactService.getReverseHarpMail();
    this.linkMail = this.contactService.getReverseHarpMailTo();
    this.isEmailSet = true;

  }

  makePhone(): void {
    this.innerHtmlPhone = this.contactService.getReversePhone();
  }

  activate(event) {
    if (!this.isEmailSet) {
      event.preventDefault();
      this.make();
    }
  }

  activatePhone(event) {
    event.preventDefault();
    this.makePhone();
  }

}
