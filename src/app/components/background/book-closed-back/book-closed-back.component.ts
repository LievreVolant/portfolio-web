import {Component, Input} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {BOOK_COVER_HEIGHT, BOOK_COVER_WIDTH, BOOK_PAGE_WIDTH} from '../../../constants';

@Component({
  selector: 'app-book-closed-back',
    imports: [
        RouterOutlet
    ],
  templateUrl: './book-closed-back.component.html',
  styleUrl: './book-closed-back.component.scss'
})
export class BookClosedBackComponent {
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
