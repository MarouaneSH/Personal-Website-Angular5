import { TimelineComponent } from './../timeline/timeline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareCircleComponent } from '../square-circle/square-circle.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  declarations: [
    SquareCircleComponent,
    MenuComponent,
    TimelineComponent
  ],
  exports : [
    SquareCircleComponent,
    MenuComponent,
    AngularMaterialModule,
    TimelineComponent
  ]
})
export class SharedModule { }
