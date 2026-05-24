import {Tab} from './tab.model';

export class Page {
    previous_page_url: string;
    next_page_url: string;
    current_tab: Tab | null;
    left_tabs: Tab[];
    right_tabs: Tab[];

    constructor(previous_page_url: string, next_page_url: string, current_tab_title: string) {
        this.previous_page_url = previous_page_url;
        this.next_page_url = next_page_url;
        this.current_tab = Tab.getTabByTitle(current_tab_title);
        this.left_tabs = this.getLeftTabs();
        this.right_tabs = this.getRightTabs();
    }

    private getLeftTabs(): Tab[] {
        if (this.current_tab) {
            switch(this.current_tab.title) {
                case 'Profile':
                    return this.left_tabs;
                case 'Favorite Projects':
                    return this.left_tabs;
                case 'All Projects':
                    return this.left_tabs;
                case 'Contact':
                    return this.left_tabs;
                default:
                    return [];
            }
        }
        return [];
    }

    private getRightTabs(): Tab[] {
        if (this.current_tab) {
            switch(this.current_tab.title) {
                case 'Profile':
                    return this.left_tabs;
                case 'Favorite Projects':
                    return this.left_tabs;
                case 'All Projects':
                    return this.left_tabs;
                case 'Contact':
                    return this.left_tabs;
                default:
                    return [];
            }
        }
        return [];
    }
}
