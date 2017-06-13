import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    constructor() { }
    color = 'primary';
    mode = 'determinate';
    skills = [
        {
            value: 50,
            name: 'Angular (4)'
        }, {
            value: 50,
            name: 'JavaScript (TypeScript)'
        }, {
            value: 65,
            name: 'Angular Material'
        }, {
            value: 70,
            name: 'HTML 5'
        }, {
            value: 60,
            name: 'CSS'
        }, {
            value: 45,
            name: 'GIT (SourceTree)'
        },
    ];

  ngOnInit() {
  }

}
