import { routeInAnimation } from './../shared/animations';
import { Component, OnInit,HostBinding } from '@angular/core';
import {transition, trigger, query, keyframes,stagger, animate, style } from '@angular/animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    routeInAnimation
  ]
})
export class SkillsComponent implements OnInit {

  @HostBinding('@routeInAnimation') routeAnimation = true;
  constructor() { }

  ngOnInit() {
  }

}
