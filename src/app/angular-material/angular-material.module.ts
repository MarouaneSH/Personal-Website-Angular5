import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatChipsModule,
        MatTabsModule,
        MatProgressBarModule,
        MatGridListModule
      } from '@angular/material';


@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
