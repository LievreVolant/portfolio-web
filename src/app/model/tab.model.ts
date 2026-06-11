import {COLOR_2, COLOR_3, COLOR_4, COLOR_5, COLOR_6} from '../constants';

export class Tab {
    title: string;
    iconSrc: string;
    color: string;
    path: string;
    altitude: number;
    length: number;
    height: number;

    constructor(title: string, iconSrc: string, color: string, path: string, altitude: number, length: number, height: number = 53) {
        this.title = title;
        this.iconSrc = iconSrc;
        this.color = color;
        this.path = path;
        this.altitude = altitude;
        this.length = length;
        this.height = height;
    }

    static getTabByTitle(title: string): Tab | null {
        switch (title) {
            case 'Summary':
                return this.summary;
            case 'Profile':
                return this.profile;
            case 'Favorite Projects':
                return this.favProjects;
            case 'All Projects':
                return this.allProjects;
            case 'Contact':
                return this.contact;
            default:
                return null;
        }
    }

    static readonly summary: Tab = new Tab('Summary', 'assets/images/icons/tabs/cat.png', COLOR_5, 'summary', 0, 80);
    static readonly profile: Tab = new Tab('Profile', 'assets/images/icons/tabs/cat.png', COLOR_2, 'presentation', 60, 90);
    static readonly favProjects: Tab = new Tab('Favorite Projects', 'assets/images/icons/tabs/star.png', COLOR_3, 'projects/favorite', 165, 110);
    static readonly allProjects: Tab = new Tab('All Projects', 'assets/images/icons/tabs/folder.png', COLOR_4, 'projects/all', 230, 80);
    static readonly contact: Tab = new Tab('Contact', 'assets/images/icons/tabs/paper_plane.png', COLOR_6, 'contact', 500, 90);

    static readonly routeOrder: string[] = [
        '',
        'summary',
        'presentation',
        'presentation/career',
        'presentation/competences',
        'presentation/passions/1',
        'presentation/passions/2',
        'projects/favorite',
        'projects/favorite/1',
        'projects/favorite/2',
        'projects/favorite/3',
        'projects/all',
        'projects/all/:projectId',
        'contact',
        'back-cover',
    ];

    static readonly routeToTab: Record<string, Tab | null> = {
        '': null,
        'summary': Tab.summary,
        'presentation': Tab.profile,
        'presentation/career': null,
        'presentation/competences': null,
        'projects/favorite': Tab.favProjects,
        'projects/favorite/1': null,
        'projects/favorite/2': null,
        'projects/favorite/3': null,
        'projects/all': Tab.allProjects,
        'projects/all/:projectId': null,
        'bonus/passions/1': null,
        'bonus/passions/2': null,
        'contact': Tab.contact,
        'back-cover': null,
    };
}
