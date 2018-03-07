import { Project } from './../service/project.model';
import { WorkProjectService } from './../service/work-project.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import {MatDialog , MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import { WorkDialogComponent } from '../work-dialog/work-dialog.component';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar/dist/lib/perfect-scrollbar.component';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss'],
})
export class WorkListComponent implements OnInit {

  filter= false;
  projects: Project[];
  filtredProject: Project[];
  constructor(
    private workProjectService: WorkProjectService,
    public dialog: MatDialog,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.projects = this.workProjectService.projects;
    this.filtredProject = this.getProjects('all');
  }

  openDialog(project: Project): void {
    const dialogRef = this.dialog.open(WorkDialogComponent, {
      width: '80%',
      height: '80%',
      data: { project: project},
    });
  }
  changeCategorie(categorie) {
    this.removeClassActive();
    const elem = categorie._elementRef.nativeElement;
    this.renderer.addClass(elem, 'active');
    this.filter = true;
    this.filtredProject = this.getProjects(elem.textContent.toLowerCase());
  }

  removeClassActive(){
    const btns = Array.from(document.querySelectorAll('.work-content button'));
    btns.forEach(element => {
      this.renderer.removeClass(element, 'active');
    });
  }

  getProjects(sort?) {
    if (sort !== 'all') {
      return this.projects.filter((project) => project.categorie === sort);
    }
    return this.projects;
  }

}
