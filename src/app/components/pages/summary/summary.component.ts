import {Component} from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {RouterLink} from '@angular/router';
import projectsData from '../../../data/projects.json';

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
    projectsData: ProjectData[] = projectsData;
}
