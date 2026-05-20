import {Component, Input} from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {TabComponent} from '../../shared/tab/tab.component';

@Component({
  selector: 'app-summary',
    imports: [
        PageCornersComponent,
        TabComponent
    ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
}
