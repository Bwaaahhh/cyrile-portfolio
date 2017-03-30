import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';

import { HomeComponent } from './home.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    HomeComponent,
    HighlightDirective
    ],
    bootstrap: [ HomeComponent ]
})
export class HomeModule {}
