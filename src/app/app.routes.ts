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
import {TheShadowWitchComponent} from './components/pages/favorite-projects/the-shadow-witch/the-shadow-witch.component';
import {PortfolioComponent} from './components/pages/favorite-projects/portfolio/portfolio.component';
import {AwesomeMinesweeperComponent} from './components/pages/favorite-projects/awesome-minesweeper/awesome-minesweeper.component';
import {ProjectTemplateComponent} from './components/pages/project-template/project-template.component';
import {FavoriteProjectsComponent} from './components/pages/favorite-projects/favorite-projects.component';

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
        path: 'presentation/competences',
        component: CompetencesComponent,
    },
    {
        path: 'presentation/passions/1',
        component: PassionsComponent,
    },
    {
        path: 'presentation/passions/2',
        component: PassionsBisComponent,
    },
    {
        path: 'projects/favorite',
        component: FavoriteProjectsComponent,
    },
    {
        path: 'projects/favorite/1',
        component: AwesomeMinesweeperComponent,
    },
    {
        path: 'projects/favorite/2',
        component: PortfolioComponent,
    },
    {
        path: 'projects/favorite/3',
        component: TheShadowWitchComponent,
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
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'back-cover',
        component: BackCoverComponent,
    },
];
