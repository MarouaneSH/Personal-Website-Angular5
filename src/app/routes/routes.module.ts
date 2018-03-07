import { SkillsComponent } from './../skills/skills.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'About' , component: AboutComponent},
  { path : 'Skills' , component: SkillsComponent},
  { path : 'Works', loadChildren: '../works/works.module#WorksModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModule { }

