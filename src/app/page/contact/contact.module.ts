import { NgModule }      from '@angular/core';
import { ContactComponent } from './contact.component';
import { FormGroup , FormControl , FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    NgModule,
    FormsModule,
    FormGroup,
    FormControl
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule {}
