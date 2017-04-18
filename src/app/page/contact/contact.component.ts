import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { RequestOptions, URLSearchParams, Headers , Http}    from '@angular/http';


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
export class ContactComponent{

    name: string;
    email: string;
    message: string;
    endpoint : string;

    constructor( private http : Http) {
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

//         let body = new URLSearchParams();
//
//         body.set('email', this.userForm.value.email);
//         body.set('name', this.userForm.value.nom);
//         body.set('message', this.userForm.value.message);
//         application/x-www-form-urlencoded


        // this.http.post(this.endpoint, body, options)
        //     .subscribe(
        //         response => console.log(response)
        //     )



        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        this.endpoint = "http://cyrile.marmier.codeur.online/mail.php";


        let postVars = {
            nom : this.userForm.value.nom,
            prenom : this.userForm.value.prenom,
            telephone : this.userForm.value.telephone,
            email : this.userForm.value.email,
            message : this.userForm.value.message
        };

        this.http.post(this.endpoint, postVars, options )
            .subscribe(
                response => console.log(response)
            )


    }
}
