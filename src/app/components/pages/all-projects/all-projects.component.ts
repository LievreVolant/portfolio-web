import {Component} from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {Page} from '../../../model/page.model'

@Component({
  selector: 'app-all-projects',
    imports: [
        PageCornersComponent
    ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent extends Page {
    constructor() {
        super('projects/favorite/3', 'projects/all/1', 'All Projects');
    }
}
