import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {IMG_SRC} from '../../../constants';

@Component({
  selector: 'app-project-template',
    imports: [
        PageCornersComponent
    ],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.scss'
})
export class ProjectTemplateComponent {

    protected readonly imgSrc = IMG_SRC;
}
