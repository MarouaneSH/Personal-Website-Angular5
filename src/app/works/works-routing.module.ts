import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkListComponent } from './work-list/work-list.component';

const routes: Routes = [
  {path: '' , component: WorkListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
