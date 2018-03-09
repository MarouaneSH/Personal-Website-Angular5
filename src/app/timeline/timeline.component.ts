import { TimelineService } from './timeline.service';
import { ActivatedRoute, Router,NavigationStart } from '@angular/router';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit, Renderer2,Input  } from '@angular/core';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [TimelineService],
  animations: [
    trigger('test', [
      transition('* => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
    ])
  ]),
]})
export class TimelineComponent implements OnInit {

  @Input() currentRoute: string;
  state ;
  routes:Array<string> = ['/','About','Skills','Works','Contact'];

  constructor(private renderer: Renderer2, public router:Router) {
  }

  ngOnInit() {
    const circle = document.querySelector(`.${this.currentRoute.toLocaleLowerCase()}`);
    this.renderer.addClass(circle,"active");
  }

  navigateTo(Route){
    this.router.navigate([Route]);
  }

  DoMargin(){
    if(this.currentRoute === 'Contact') {
      return '40px';
    }
    return 0;
  }

  navigate(){
    let index = this.routes.indexOf(this.currentRoute) ;
    this.navigateTo(this.routes[++index]);
  }
}
