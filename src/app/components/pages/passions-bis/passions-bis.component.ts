import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import { IMG_SRC } from '../../../constants';

@Component({
  selector: 'app-passions-bis',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './passions-bis.component.html',
  styleUrl: './passions-bis.component.scss',
})
export class PassionsBisComponent {
    readonly imgSrc = IMG_SRC;
}
