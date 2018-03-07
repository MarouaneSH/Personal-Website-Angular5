import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorkListComponent } from './work-list/work-list.component';
import { SharedModule } from '../shared/shared.module';
import { PerfectScrollbarConfigInterface , PERFECT_SCROLLBAR_CONFIG , PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { WorkProjectService } from './service/work-project.service';
import { WorkDialogComponent } from './work-dialog/work-dialog.component';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar/dist/lib/perfect-scrollbar.component';
import { FilterWorkPipe } from './filter-work.pipe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    CommonModule,
    WorksRoutingModule,
    SharedModule,
    PerfectScrollbarModule,
  ],
  entryComponents: [
    WorkDialogComponent,

  ],
  declarations: [
    WorkListComponent,
    WorkDialogComponent,
    FilterWorkPipe,
  ],
  providers: [
    WorkProjectService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    WorkDialogComponent
  ]
})
export class WorksModule { }

