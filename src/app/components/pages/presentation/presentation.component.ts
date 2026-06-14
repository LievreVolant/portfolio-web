import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { PageCornersComponent } from '../../shared/page-corners/page-corners.component';
import { ICON_SRC, IMG_SRC, LINKS } from '../../../constants';
import recentProjectsData from '../../../data/recent-project-descriptions.json';

@Component({
  selector: 'app-presentation',
    imports: [
        PageCornersComponent,
        RouterLink,
    ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
    readonly links = LINKS;
    readonly imgSrc = IMG_SRC;
    readonly iconSrc = ICON_SRC;
    recentProjectsData: RecentProjectData[] = recentProjectsData;
}
