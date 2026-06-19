import { Component, OnInit } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {IMG_SRC} from '../../../constants';
import { ActivatedRoute } from '@angular/router';
import {ProjectsService} from '../../../services/projects.service';

@Component({
  selector: 'app-project-template',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.scss',
})
export class ProjectTemplateComponent implements OnInit {
    protected readonly imgSrc = IMG_SRC;
    projectId: number | null = null;
    project: ProjectData | undefined;

    constructor(private readonly route: ActivatedRoute, private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((param) => {
            this.projectId = Number(param.get('projectId'));
            if (this.projectId) {
                this.project = this.projectsService.getProjectById(this.projectId);
            }
        });
    }

    getPrevPage(): string {
        if (this.projectId! <= 1) {
            return 'projects/all';
        } else {
            return `projects/all/${this.projectId!-1}`;
        }
    }

    getNextPage(): string {
        if (this.projectId! >= 9) {
            return 'bonus/passions/1';
        } else {
            return `projects/all/${this.projectId!+1}`;
        }
    }
}
