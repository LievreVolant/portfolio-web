import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import { LINKS } from '../../../constants';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-career',
    imports: [
        PageCornersComponent,
        RouterLink,
    ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
    readonly links = LINKS;
}
