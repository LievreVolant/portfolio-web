import {COLOR_3, COLOR_4, COLOR_5, COLOR_6} from '../constants';

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

    static profile: Tab = new Tab('Profile', "assets/images/cat.png", COLOR_6, 'presentation', 0, 90);
    static favProjects: Tab = new Tab('Favorite Projects', "assets/images/star.png", COLOR_3, 'projects/favorite', 75, 110);
    static allProjects: Tab = new Tab('All Projects', "assets/images/folder.png", COLOR_4, 'projects/all', 10, 80);
    static contact: Tab = new Tab('Contact', "assets/images/paper_plane.png", COLOR_5, 'contact', 250, 90);
}
