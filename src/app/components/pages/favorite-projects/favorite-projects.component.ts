import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import { IMG_SRC } from '../../../constants';

@Component({
  selector: 'app-awesome-minesweeper',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './favorite-projects.component.html',
  styleUrl: './favorite-projects.component.scss',
})
export class FavoriteProjectsComponent {
    readonly imgSrc = IMG_SRC;
}
