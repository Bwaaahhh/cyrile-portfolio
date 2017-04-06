import {Component} from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
  // styleUrls: ['../../app.component.css']
})
export class ContactComponent {

    userForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        adresse: new FormGroup({
            rue: new FormControl(),
            ville: new FormControl(),
            cp: new FormControl(),
        })
    });

    // onSubmit(value: any){
    //     console.log(value);
    // }
}
