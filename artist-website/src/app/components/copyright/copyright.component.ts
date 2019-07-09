import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  @Input() background;

  ngOnInit() {
  }

}
