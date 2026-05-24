import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tab} from '../../../model/tab.model';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent implements OnInit {
    @Input() title?: string;
    tab: Tab | null | undefined;

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
