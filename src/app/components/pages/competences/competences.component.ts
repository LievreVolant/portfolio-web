import { Component, OnInit } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import { ProjectsService } from '../../../services/projects.service';
import { LanguageData } from '../../../model/project.interface';
import { IMG_SRC } from '../../../constants';

@Component({
  selector: 'app-competences',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss',
})
export class CompetencesComponent implements OnInit {
    protected readonly imgSrc = IMG_SRC;
    languages: string[] = ['Angular', 'C', 'C++', 'C#', 'Dart', 'Flutter', 'GraphQl', 'HTML / CSS', 'Java', 'JavaScript', 'Lua', 'OCaml', 'PHP', 'R', 'Python', 'SQL', 'Symfony', 'TypeScript', 'UML', 'XAML'];
    projectLanguages: string[] = [];
    favoriteLanguages: string[] = ['Angular', 'C#', 'HTML / CSS', 'TypeScript'];

    constructor(protected projectsService: ProjectsService) { }
    
    ngOnInit() {
        this.projectLanguages = this.projectsService.getLanguagesFromProjects();
    }
    
    getLanguageData(language: string): LanguageData {
        return this.projectsService.getLanguageData(language);
    }
}
