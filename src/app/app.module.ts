import { PreloadingService } from './preloading.service';
import { TimelineService } from './timeline/timeline.service';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar/dist/lib/perfect-scrollbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutesModule } from './routes/routes.module';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedModule } from './shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesModule,
    PerfectScrollbarModule,
    SharedModule,

  ],
  providers: [
    PreloadingService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
