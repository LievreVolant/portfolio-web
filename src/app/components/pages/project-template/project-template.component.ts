import { Component, OnInit } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {IMG_SRC} from '../../../constants';
import projectsData from '../../../data/projects.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-template',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.scss',
})
export class ProjectTemplateComponent implements OnInit {
    projectsData: ProjectData[] = projectsData;
    protected readonly imgSrc = IMG_SRC;
    projectId: number | null = null;
    project: ProjectData | null = null;
    
    constructor(private readonly route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((param) => { 
            this.projectId = Number(param.get('projectId')); 
            if (this.projectId) {
                this.project = projectsData.find(p => p.id === this.projectId) ?? null;
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
