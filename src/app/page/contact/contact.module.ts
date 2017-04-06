import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    NgModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule {}
