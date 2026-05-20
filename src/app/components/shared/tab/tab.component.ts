import {Component, Input, OnInit} from '@angular/core';
import {COLOR_1, COLOR_2, COLOR_3, COLOR_5, COLOR_6} from '../../../constants';
import {Router} from '@angular/router';

class Tab {
    title: string;
    icon: string;
    color: string;
    path: string;
    altitude: number;
    length: number;
    height: number;

    constructor(title: string, icon: string, color: string, path: string, altitude: number, length: number, height: number = 3) {
        this.title = title;
        this.icon = icon;
        this.color = color;
        this.path = path;
        this.altitude = altitude;
        this.length = length;
        this.height = height;
    }

    static getTabByTitle(title: string): Tab | undefined {
        switch (title) {
            case 'Profile':
                return this.profile;
            default:
                return undefined;
        }
    }

    static profile: Tab = new Tab('Profile', 'profil-icon', COLOR_6, 'presentation', 50, 7);
    static favProjects: Tab = new Tab('Favorite Projects', 'profil-icon', COLOR_1, 'projects/favorite', 50, 7);
    static allProjects: Tab = new Tab('All Projects', 'profil-icon', COLOR_3, 'projects/all', 50, 7);
    static contact: Tab = new Tab('Contact', 'profil-icon', COLOR_5, 'contact', 50, 7);
}

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent implements OnInit {
    @Input() title?: string;
    tab: Tab | undefined;
    @Input() left?: boolean;

    constructor(protected router: Router) {}

    ngOnInit() {
        if (this.title) {
            this.tab = Tab.getTabByTitle(this.title);
        }
    }

    onTabClick(path: string | undefined): void {
        if (path !== undefined && path !== null) {
            this.router.navigate([path]);
        }
    }
}
