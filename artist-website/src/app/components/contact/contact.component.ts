import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  innerHtml: string;
  link: string;
  loading = true;

  ngOnInit() {
    this.showContact();
  }

  showContact() {
    setTimeout(() => {
      this.make();
    }, 5000);
  }

  make() {
    const reverse = ['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 't', 'c', 'a', 't', 'n', 'o', 'c'];
    this.innerHtml =  this.replace(reverse).reverse().join('');
    this.link = 'mailto:' + this.innerHtml;
    this.loading = false;
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

}
