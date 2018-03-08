import { openMenu } from './../shared/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    openMenu
  ]
})
export class MenuComponent implements OnInit {

  openMenu = 'inactive';
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    this.openMenu = this.openMenu === 'active' ? 'inactive' : 'active';
  }

}
