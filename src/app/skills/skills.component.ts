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
            value: 45,
            name: 'Angular'
        }, {
            value: 50,
            name: 'Java Script (Type Script)'
        }, {
            value: 65,
            name: 'Angular Material'
        }, {
            value: 70,
            name: 'HTML 5'
        }, {
            value: 55,
            name: 'CSS'
        }, {
            value: 45,
            name: 'GIT (Source Tree)'
        },
    ];

  ngOnInit() {
  }

}
