import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('link') contact;

  innerHtml: string;
  link: string;
  loading = true;

  imageVisibility = 'hidden';
  loadingDisplay: string;

  ngAfterViewInit() {
    // this.showContact();
  }

  showContact() {
    setTimeout(() => {
      this.make();
    }, 10000);
  }

  make(click?: boolean): void {
    const reverse = ['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 't', 'c', 'a', 't', 'n', 'o', 'c'];
    this.innerHtml =  this.replace(reverse).reverse().join('');
    const reverseLink = ['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 't', 'c', 'a', 't', 'n', 'o', 'c', ':', 'o', 't', 'l', 'i', 'a', 'm'];
    this.link = this.replace(reverseLink).reverse().join('');
    this.loading = false;
    if (click) {
      window.location.href = this.link;
    }
  }

  activate(event) {
    this.make(true);
  }

  replace (list: Array<string>): Array<string>  {
    let newList = list;
    for (let i = 0; i < list.length; i++) {
      if(list[i] === '$') {
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
