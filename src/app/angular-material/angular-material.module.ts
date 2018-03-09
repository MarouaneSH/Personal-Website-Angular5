import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatChipsModule,
        MatTabsModule,
        MatProgressBarModule,
        MatGridListModule,
        MatInputModule
      } from '@angular/material';


@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
