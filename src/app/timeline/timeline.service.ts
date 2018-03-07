import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class TimelineService {


  public currentRoute:string;
  public rountesNames = ['Home','About','Skills','Works'];
  public currentRouteIndex=0;

  constructor(public routerActive:ActivatedRoute,private router:Router) {
   }

   getActivatedRoute(){
        this.routerActive.url.subscribe((url)=>{
          console.log(url);
      });
      console.log(this.currentRoute);
      console.log("hoola");
   }

   navigate(){

     let routeToNaviagte;
     console.log("current route" +this.currentRoute);
     let index = this.rountesNames.indexOf(this.currentRoute);
     console.log("index" +index);
     if(index === this.rountesNames.length -1 ){
        routeToNaviagte = "/";
     } else {
        routeToNaviagte = this.rountesNames[++index];
     }
     console.log(routeToNaviagte);
   }

   getCurrenRoute(){
     return  this.rountesNames[this.currentRouteIndex];
   }

}
