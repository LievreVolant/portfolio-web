import {Component, OnInit} from '@angular/core';
import {BOOK_COVER_HEIGHT, BOOK_COVER_WIDTH, BOOK_PAGE_HEIGHT, BOOK_PAGE_WIDTH} from '../../../constants';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {TabComponent} from '../../shared/tab/tab.component';
import {Tab} from '../../../model/tab.model';
import {filter} from 'rxjs';

@Component({
  selector: 'app-book-open',
    imports: [
        RouterOutlet,
        TabComponent,
    ],
  templateUrl: './book-open.component.html',
  styleUrl: './book-open.component.scss'
})
export class BookOpenComponent implements OnInit {
    protected readonly Array = Array;
    bookCoverWidth = BOOK_COVER_WIDTH;
    bookCoverHeight = BOOK_COVER_HEIGHT;
    bookPageWidth = BOOK_PAGE_WIDTH;
    bookPageHeight = BOOK_PAGE_HEIGHT;

    leftTabs: Tab[] = [];
    currentTab: Tab | null = null;
    rightTabs: Tab[] = [];

    constructor(private router: Router) {}

    ngOnInit() {
        this.updateTabs();

        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe(() => {
            this.updateTabs();
        });
    }

    private updateTabs(): void {
        const currentUrl = this.router.url.replace(/^\//, '');

        const normalizedUrl = this.normalizeUrl(currentUrl);

        const currentIndex = Tab.routeOrder.indexOf(normalizedUrl);
        if (currentIndex === -1) return;

        const leftRoutes = Tab.routeOrder.slice(0, currentIndex);
        this.leftTabs = this.uniqueTabs(leftRoutes);

        this.currentTab = Tab.routeToTab[normalizedUrl] || null;

        const rightRoutes = Tab.routeOrder.slice(currentIndex);
        this.rightTabs = this.uniqueTabs(rightRoutes);
    }

    private normalizeUrl(url: string): string {
        return url.replace(/all\/\d+$/, 'all/:projectId');
    }

    private uniqueTabs(routes: string[]): Tab[] {
        const seen = new Set<Tab>();
        const result: Tab[] = [];
        for (const route of routes) {
            const tab = Tab.routeToTab[route];
            if (tab && !seen.has(tab)) {
                seen.add(tab);
                result.push(tab);
            }
        }
        return result;
    }
}
