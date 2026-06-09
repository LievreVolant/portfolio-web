import { Component } from '@angular/core';
import { PageCornersComponent } from '../../shared/page-corners/page-corners.component';
import { IMG_SRC, LINKS } from '../../../constants';
import * as projectDescriptions from '../../../data/short-project-descriptions.json';

@Component({
  selector: 'app-presentation',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
    readonly links = LINKS;
    readonly imgSrc = IMG_SRC;
    projectDescriptions: unknown = projectDescriptions;
}
