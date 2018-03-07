import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routing(){
    this.router.navigate(['/About']);
  }
  animateBg(event) {
    const background = document.getElementById('bg-image');

    const moveX = (window.innerWidth / 2 - event.pageX) * 0.1;
    const moveY = (window.innerHeight / 2 - event.pageY) * 0.1;

   if(moveX < 10)  {
     background.style.backgroundPositionX = moveX + 'px';
    }
    background.style.backgroundPositionY = moveY + 'px';
  }

}
