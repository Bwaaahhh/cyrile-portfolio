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

    // getFriends() {
    //     return this.http.request('./mail.json')
    //         .map(res => res.json()
    //
    //     );
    //     console.log(res);
    // }


    userForm = new FormGroup({
        nom: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        prenom: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
        telephone: new FormControl(null,[Validators.required, Validators.pattern('^[0-9]{10}$')]),
        message: new FormControl(null, [Validators.required, Validators.minLength(20)])
    });

    onSubmit(){

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        this.endpoint = "http://cyrile.marmier.codeur.online/portfolio/mail.php";


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
