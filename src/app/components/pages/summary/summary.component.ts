import {Component} from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';

@Component({
  selector: 'app-summary',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
}
