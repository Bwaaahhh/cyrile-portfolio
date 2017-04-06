import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { ProjetComponent } from './projet.component';
import { HttpModule }    from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule
  ],
  declarations: [
    ProjetComponent
    ],
    bootstrap: [ ProjetComponent ]
})
export class ProjetModule {}
