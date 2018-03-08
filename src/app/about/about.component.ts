import { routeInAnimation } from './../shared/animations';
import { Component, OnInit,HostBinding} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    routeInAnimation,
  ]
})
export class AboutComponent implements OnInit {

  @HostBinding('@routeInAnimation') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
