import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {BookClosedComponent} from './components/background/book-closed/book-closed.component';
import {BookOpenComponent} from './components/background/book-open/book-open.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, BookClosedComponent, BookOpenComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    activeUrl:string = '';

    constructor(private router: Router) {
        this.activeUrl = this.router.url;
    }
}
