import { Component, OnInit } from '@angular/core';
import {transition, trigger, query, keyframes,stagger, animate, style } from '@angular/animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('showup', [
      transition(':enter', [
        query('.skills-desc, img', style({opacity: 0})),
        query('h5', [
          style({opacity: 0}),
          stagger(500,
            animate(1000, keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ])))
        ])
      ]),
    ]),
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
