import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';

import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    HomeComponent
    ],
    bootstrap: [ HomeComponent ]
})
export class HomeModule {}
