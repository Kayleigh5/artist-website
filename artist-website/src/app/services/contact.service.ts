import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getReverseMail(): string {
    return this.makeNormal(['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 't', 'c', 'a', 't', 'n', 'o', 'c']);
  }

  getReverseMailTo(): string {
      return this.makeNormal(['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 't', 'c', 'a', 't', 'n', 'o', 'c', ':', 'o', 't', 'l', 'i', 'a', 'm']);
  }

  getReverseHarpMail(): string {
    return this.makeNormal(['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 'p', 'r', 'a', 'h']);
  }

  getReverseHarpMailTo(): string {
      return this.makeNormal(['l', 'n', '.', 'd', 'r', 'a', 'e', 'b', 'h', 'g', 'i', 'e', 'l', 'y', 'a', 'k', '$', 'p', 'r', 'a', 'h', ':', 'o', 't', 'l', 'i', 'a', 'm']);
  }

  getReversePhone(): string {
    return ['5', '5', '6', '2', '2', '4', '5', '2', '6', '0'].reverse().join('');
  }

  makeNormal(list: string[]): string {
    return this.replace(list).reverse().join('');
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
}
