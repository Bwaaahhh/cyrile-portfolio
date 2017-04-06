import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routing } from './app.routes';

import { HomeComponent } from './page/home/home.component';
import { SkillComponent } from './page/skill/skill.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProjetComponent } from './page/projet/projet.component' ;

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    ContactComponent,
    ProjetComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    Angular2FontawesomeModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
