import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {IMG_SRC} from '../../../constants';

@Component({
  selector: 'app-projects',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    readonly imgSrc = IMG_SRC;
}
