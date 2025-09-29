import {Routes} from '@angular/router';
import {SummaryComponent} from './components/pages/summary/summary.component';
import {PresentationComponent} from './components/pages/presentation/presentation.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {FrontCoverComponent} from './components/pages/front-cover/front-cover.component';
import {BackCoverComponent} from './components/pages/back-cover/back-cover.component';
import {FavoriteProjectsComponent} from './components/pages/favorite-projects/favorite-projects.component';
import {AllProjectsComponent} from './components/pages/all-projects/all-projects.component';
import {RecentProjectsComponent} from './components/pages/recent-projects/recent-projects.component';

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
        path: 'presentation/:page',
        component: PresentationComponent,
    },
    {
        path: 'projects',
            children: [
                {
                    path: 'favorite',
                    component: FavoriteProjectsComponent,
                },
                {
                    path: 'recent',
                    component: RecentProjectsComponent,
                },
                {
                    path: 'all/:projectId',
                    component: AllProjectsComponent,
                },
            ],
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
