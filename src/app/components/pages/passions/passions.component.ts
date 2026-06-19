import {Component, OnInit} from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import { IMG_SRC } from '../../../constants';
import {ProjectsService} from '../../../services/projects.service';

@Component({
  selector: 'app-passions',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './passions.component.html',
  styleUrl: './passions.component.scss',
})
export class PassionsComponent implements OnInit {
    readonly imgSrc = IMG_SRC;
    nbProjects: number = 0;

    constructor(protected projectsService: ProjectsService) {}

    ngOnInit() {
        this.nbProjects = this.projectsService.getNbProjects();
    }
}
