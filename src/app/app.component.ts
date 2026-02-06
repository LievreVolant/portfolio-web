import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BookClosedComponent} from './components/background/book-closed/book-closed.component';
import {BookOpenComponent} from './components/background/book-open/book-open.component';

@Component({
    selector: 'app-root',
    imports: [BookClosedComponent, BookOpenComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    activeUrl:string = '';

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            event instanceof NavigationEnd ? this.activeUrl = event.url: null
        })
    }
}
