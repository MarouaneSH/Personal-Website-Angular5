
import { Injectable } from '@angular/core';


interface ImagesUrl  {
   url: string;
   image?: HTMLImageElement;
}

@Injectable()
export class PreloadingService {


    DefaultImages: ImagesUrl[] = [
    {
      url : '/assets/img/bg-line.svg'
    },
    {
      url : '/assets/img/bg-image.jpg'
    },
    {
      url : '/assets/img/profile.png'
    },
    {
      url : '/assets/img/sa.png'
    },
    {
      url : '/assets/img/about.jpg'
    },
    {
      url : '/assets/img/work.jpg'
    },
    {
      url : '/assets/img/profile.png'
    }
  ];

  constructor() {
   }

   public preloadDefaultImages(){
      this.DefaultImages.forEach((el)=>{
         el.image = new Image();
         el.image.src = el.url;
      });
   }



}
