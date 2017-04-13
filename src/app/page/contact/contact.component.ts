import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Http }    from '@angular/http';

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
export class ContactComponent implements OnInit {

    name: string;
    email: string;
    message: string;
    endpoint : string;

    http : Http;



    constructor(http : Http) {
        this.http = http;
    }

    userForm = new FormGroup({
        nom: new FormControl(null),
        prenom: new FormControl(null),
        email: new FormControl(null),
        telephone: new FormControl(null),
        message: new FormControl(null)
    });

    onSubmit(){
        console.log(this.userForm.value);
        let postVars = {
          email : this.email,
          name : this.name,
          message : this.message
        };

        this.http.post(this.endpoint, postVars)
        .subscribe(
            response => console.log(response),
            response => console.log(response)
        )
    }

    ngOnInit() {
    //This data could really come from some inputs on the interface - but let's keep it simple.
    this.email = "cy.etievant@gmail.com";
    this.name = "Hayden Pierce";
    this.message = "Hello, this is Hayden.";

        //Start php via the built in server: $ php -S localhost:8000
            this.endpoint = "http://cyrile.marmier.codeur.online/mail.php";
    }


}
