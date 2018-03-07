import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openMenu', [
      state('active', style({
        left : 0
      })),
      state('inactive', style({
        left : '-100%',
      })),
      transition('inactive => active', animate('500ms',
      keyframes([
        style({opacity: 0, transform: 'translateX(-90%)', offset: 0}),
        style({opacity: 0.5, transform: 'translateX(-40%)',  offset: 0.3}),
        style({opacity: 0, transform: 'translateX(100%)',     offset: 1.0})
      ]))),
      transition('active => inactive', animate('500ms',
          keyframes([
            style({opacity: 1, transform: 'translateX(0)', offset: 0}),
            style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateX(-100%)',     offset: 1.0})
          ])
        ))
    ])
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
