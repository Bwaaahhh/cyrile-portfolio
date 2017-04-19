import { Component } from '@angular/core';
import { RequestOptions, Response,  Headers , Http}    from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'projet',
  templateUrl: './projet.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProjetComponent {

    private data;

    constructor( private http : Http) {
    }
    ngOnInit(){
        this.http.get(`http://cyrile.marmier.codeur.online/project.php`)
        .subscribe(result => this.data = result.json());
    }
}
