import {Component} from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {RouterLink} from '@angular/router';
import projectsData from '../../../data/projects.json';
import { ProjectData } from '../../../model/project.interface';
import { PRJ_SRC } from '../../../constants';

@Component({
  selector: 'app-summary',
    imports: [
        PageCornersComponent,
        RouterLink,
    ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
    protected readonly imgSrc = PRJ_SRC;
    projectsData: ProjectData[] = projectsData;
}
