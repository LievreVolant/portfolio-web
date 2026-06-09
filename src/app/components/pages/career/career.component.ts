import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import { LINKS } from '../../../constants';

@Component({
  selector: 'app-career',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
    readonly links = LINKS;
}
