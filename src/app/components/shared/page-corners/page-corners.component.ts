import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-corners',
  imports: [],
  templateUrl: './page-corners.component.html',
  styleUrl: './page-corners.component.scss'
})
export class PageCornersComponent {
    @Input() prevPath?: string;
    @Input() nextPath?: string;

    constructor(protected router: Router) {}

    onPageCornerClick(path: string | undefined): void {
        if (path !== undefined && path !== null) {
            this.router.navigate([path]);
        }
    }
}
