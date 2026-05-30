import { Component } from '@angular/core';
import {PageCornersComponent} from '../../shared/page-corners/page-corners.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contact',
    imports: [
        PageCornersComponent,
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
