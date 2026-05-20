import {Component} from '@angular/core';
import {BOOK_COVER_HEIGHT, BOOK_COVER_WIDTH, BOOK_PAGE_HEIGHT, BOOK_PAGE_WIDTH} from '../../../constants';
import {RouterOutlet} from '@angular/router';
import {TabComponent} from '../../shared/tab/tab.component';

@Component({
  selector: 'app-book-open',
    imports: [
        RouterOutlet,
        TabComponent,
    ],
  templateUrl: './book-open.component.html',
  styleUrl: './book-open.component.scss'
})
export class BookOpenComponent {
    bookCoverWidth = BOOK_COVER_WIDTH;
    bookCoverHeight = BOOK_COVER_HEIGHT;
    bookPageWidth = BOOK_PAGE_WIDTH;
    bookPageHeight = BOOK_PAGE_HEIGHT;
    protected readonly Array = Array;
}
