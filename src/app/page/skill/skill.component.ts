import {Component} from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['../../app.component.css']
})
export class SkillComponent {
    testClick() {
        console.log('pouet');
    }
}
