import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '';

    navLinks = [
        {
            label: 'Tymoteusz Klocek',
            url: "/tymoteusz-klocek"
        },
        {
            label: 'About Me',
            url: "/about-me"
        },
        {
            label: 'Projects',
            url: "/projects"
        },
        
    ];

}
