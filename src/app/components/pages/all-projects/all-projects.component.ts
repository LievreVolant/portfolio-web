import {Component, OnInit} from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {ProjectsService} from '../../../services/projects.service';
import { IMG_SRC } from '../../../constants';

@Component({
  selector: 'app-all-projects',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss',
})
export class AllProjectsComponent implements OnInit {
    protected readonly imgSrc = IMG_SRC;
    leftPageLanguages: string[] = [];
    rightPageLanguages: string[] = [];
    ignoredLanguages: string[] = ['SQL', 'UML', 'PHP', 'XAML', 'GraphQl', 'Dart', 'TypeScript'];
    nbProjects: number = 0;

    constructor(protected projectsService: ProjectsService) {}

    ngOnInit() {
        this.nbProjects = this.projectsService.getNbProjects();
        const languages = this.projectsService.getLanguagesFromProjects().filter((language) => {return !this.ignoredLanguages.includes(language); });
        const halfOfLanguages = languages.length/2;
        this.leftPageLanguages = languages.slice(0, halfOfLanguages);
        this.rightPageLanguages = languages.slice(halfOfLanguages, languages.length);
    }

    getLanguageData(language: string) {
        return this.projectsService.getLanguageData(language);
    }
}
