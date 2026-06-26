import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {PRJ_SRC} from '../../../constants';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projects',
    imports: [
        PageCornersComponent,
        RouterLink,
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    readonly imgSrc = PRJ_SRC;
}
