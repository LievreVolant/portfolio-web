import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BookClosedFrontComponent} from './components/background/book-closed-front/book-closed-front.component';
import {BookOpenComponent} from './components/background/book-open/book-open.component';
import {BookClosedBackComponent} from './components/background/book-closed-back/book-closed-back.component';

@Component({
    selector: 'app-root',
    imports: [BookClosedFrontComponent, BookOpenComponent, BookClosedBackComponent],
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
