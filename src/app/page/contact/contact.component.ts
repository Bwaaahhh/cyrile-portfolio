import {Component} from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styles:['input.ng-invalid {border-left: 5px solid red;}',
    'input.ng-valid {border-left:5px solid green;}',
    'input.ng-pristine {border-left: 1px solid grey;}']
  // styleUrls: ['../../app.component.css']
})
export class ContactComponent {

    userForm = new FormGroup({
        nom: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        prenom: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        email: new FormControl(),
        telephone: new FormControl(null,[Validators.required, Validators.pattern('^[0-9]{10}$')]),
        adresse: new FormGroup({
            rue: new FormControl(),
            ville: new FormControl(),
            cp: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$')),
        })
    });

    onSubmit(){
        console.log(this.userForm.value);
    }
}
