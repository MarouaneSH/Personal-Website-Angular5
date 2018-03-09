import { PreloadingService } from './preloading.service';
  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public preloadingService: PreloadingService){
      this.preloadingService.preloadDefaultImages();
    }

}
