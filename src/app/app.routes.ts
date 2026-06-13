import {Routes} from '@angular/router';
import {SummaryComponent} from './components/pages/summary/summary.component';
import {PresentationComponent} from './components/pages/presentation/presentation.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {FrontCoverComponent} from './components/pages/front-cover/front-cover.component';
import {BackCoverComponent} from './components/pages/back-cover/back-cover.component';
import {AllProjectsComponent} from './components/pages/all-projects/all-projects.component';
import {PassionsComponent} from './components/pages/passions/passions.component';
import {PassionsBisComponent} from './components/pages/passions-bis/passions-bis.component';
import {CompetencesComponent} from './components/pages/competences/competences.component';
import {ProjectTemplateComponent} from './components/pages/project-template/project-template.component';
import {CareerComponent} from './components/pages/career/career.component';
import {ProjectsComponent} from './components/pages/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        component: FrontCoverComponent,
    },
    {
        path: 'summary',
        component: SummaryComponent,
    },
    {
        path: 'presentation',
        component: PresentationComponent
    },
    {
        path: 'presentation/career',
        component: CareerComponent,
    },
    {
        path: 'presentation/competences',
        component: CompetencesComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'projects/all',
        component: AllProjectsComponent,
    },
    {
        path: 'projects/all/:projectId',
        component: ProjectTemplateComponent,
    },
    {
        path: 'bonus/passions/1',
        component: PassionsComponent,
    },
    {
        path: 'bonus/passions/2',
        component: PassionsBisComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'back-cover',
        component: BackCoverComponent,
    },
];
