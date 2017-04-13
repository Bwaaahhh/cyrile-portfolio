import {Component} from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styles:['input.ng-invalid {border-left: 5px solid red;}',
    'input.ng-valid {border-left:5px solid green;}',
    'input.ng-pristine {border-left: 1px solid grey;}',
    'textarea.ng-invalid {border-left: 5px solid red;}',
      'textarea.ng-valid {border-left:5px solid green;}',
      'textarea.ng-pristine {border-left: 1px solid grey;}']
  // styleUrls: ['../../app.component.css']
})
export class ContactComponent {

    userForm = new FormGroup({
        nom: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        prenom: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
        telephone: new FormControl(null,[Validators.required, Validators.pattern('^[0-9]{10}$')]),
        message: new FormControl(null, Validators.required)
    });

    onSubmit(){
        console.log(this.userForm.value);
    }
}
