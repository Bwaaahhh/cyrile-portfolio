import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { HomeComponent } from './page/home/home.component';
import { SkillComponent } from './page/skill/skill.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
