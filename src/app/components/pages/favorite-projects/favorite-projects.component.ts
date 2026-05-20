import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';

@Component({
  selector: 'app-awesome-minesweeper',
    imports: [
        PageCornersComponent
    ],
  templateUrl: './favorite-projects.component.html',
  styleUrl: './favorite-projects.component.scss'
})
export class FavoriteProjectsComponent {

}
