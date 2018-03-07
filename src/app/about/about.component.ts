import { Component, OnInit} from '@angular/core';
import {transition, trigger, query, keyframes,stagger, animate, style } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('showup', [
      transition(':enter', [
        query('.about-desc, img', style({opacity: 0})),
        query('h5', [
          style({opacity: 0}),
          stagger(500,
            animate(1000, keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ])))
        ]),
        query('.about-desc', [
          animate(500, keyframes([
            style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0) ' ,  offset: 1.0})
          ]))
        ]),
        query('img', [
          animate(500, keyframes([
            style({opacity: 0,  offset: 0}),
            style({opacity: 1,  offset: 1.0})
          ]))
        ])
      ]),
    ]),
  ]
})
export class AboutComponent implements OnInit {

  state ='start';
  constructor() { }

  ngOnInit() {
  }

}
