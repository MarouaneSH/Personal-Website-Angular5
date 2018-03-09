import { Router } from '@angular/router';
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
  constructor(private router:Router) { }

  ngOnInit() {
  }
  toggleMenu() {
    this.openMenu = this.openMenu === 'active' ? 'inactive' : 'active';
  }

  navigateTo(route){
    this.openMenu = 'inactive';
    this.router.navigate([route]);
  }

}
