import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  currentPath: String

  ngOnInit() {
    const currentPath =this.activatedRoute.snapshot.routeConfig.path;
    if (currentPath !== null && currentPath !== '') {
      this.currentPath = this.activatedRoute.snapshot.routeConfig.path;
    } else {
      this.currentPath = '';
    }
  }

}
