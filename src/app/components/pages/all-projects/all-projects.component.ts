import {Component} from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import projectsData from '../../../data/projects.json';
import { ICON_SRC, LINKS } from '../../../constants';

@Component({
  selector: 'app-all-projects',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss',
})
export class AllProjectsComponent {
    projectsData: ProjectData[] = projectsData;
    readonly iconSrc = ICON_SRC;
    readonly links = LINKS;
}
