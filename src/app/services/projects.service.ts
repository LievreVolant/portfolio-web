import { Injectable } from '@angular/core';
import {ICON_SRC, LINKS, LANGUAGE_DATA} from '../constants';
import projectsData from '../data/projects.json';
import type { LanguageData, ProjectData } from '../model/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
    readonly iconSrc = ICON_SRC;
    readonly links = LINKS;
    projects: ProjectData[] = projectsData;

    constructor() {}

    getNbProjects(): number {
        return this.projects.length;
    }

    getProjectById(id: number): ProjectData | undefined {
        return this.projects.find(project => project.id === id) ?? undefined;
    }

    getProjectsByLanguage(language: string): ProjectData[] {
        return this.projects.filter(project => project.languages.includes(language));
    }

    getLanguagesFromProjects(): string[] {
        const languages: string[] = [];
        for (const project of this.projects) {
            for (const language of project.languages) {
                if (!languages.includes(language)) {
                    languages.push(language);
                }
            }
        }
        return languages.sort((a, b) => a.localeCompare(b));
    }

    getLanguageData(language: string): LanguageData {
        return LANGUAGE_DATA[language];
    }
}
