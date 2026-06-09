import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import { IMG_SRC } from '../../../constants';

@Component({
  selector: 'app-passions',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './passions.component.html',
  styleUrl: './passions.component.scss',
})
export class PassionsComponent {
    readonly imgSrc = IMG_SRC;
}
