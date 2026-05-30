import {Component, Input} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {BOOK_COVER_HEIGHT, BOOK_COVER_WIDTH, BOOK_PAGE_WIDTH} from '../../../constants';

@Component({
  selector: 'app-book-closed-front',
    imports: [
        RouterOutlet
    ],
  templateUrl: './book-closed-front.component.html',
  styleUrl: './book-closed-front.component.scss'
})
export class BookClosedFrontComponent {
    protected readonly Array = Array;
    @Input() prevPath?: string;
    @Input() nextPath?: string;

    bookCoverWidth = BOOK_COVER_WIDTH;
    bookCoverHeight = BOOK_COVER_HEIGHT;

    constructor(private router: Router) {}

    clickOnCover() {
        if (this.nextPath) {
            this.router.navigate([this.nextPath]);
        } else if (this.prevPath) {
            this.router.navigate([this.prevPath]);
        }
    }
}
