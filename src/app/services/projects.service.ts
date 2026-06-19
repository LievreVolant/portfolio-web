import { Injectable } from '@angular/core';
import {ICON_SRC, LINKS} from '../constants';
import projectsData from '../data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
    readonly iconSrc = ICON_SRC;
    readonly links = LINKS;
    projects: ProjectData[] = projectsData;

    constructor() {}

    getProjectById(id: number): ProjectData | undefined {
        return this.projects.find(project => project.id === id) ?? undefined;
    }

    getProjectsByLanguage(language: string): ProjectData[] {
        return this.projects.filter(project => project.languages.includes(language));
    }

    getLanguagesFromProjects(): string[] {
        let languages: string[] = [];
        for (const project of this.projects) {
            for (const language of project.languages) {
                if (!languages.includes(language)) {
                    languages.push(language);
                }
            }
        }
        return languages.sort();
    }
}
