import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {IMG_SRC} from '../../../constants';
import recentProjectsData from '../../../data/recent-project-descriptions.json';
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
    readonly imgSrc = IMG_SRC;
    protected readonly recentProjectsData = recentProjectsData;
}
