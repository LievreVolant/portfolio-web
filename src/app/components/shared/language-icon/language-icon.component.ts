import {Component, Input, OnInit} from '@angular/core';
import {ICON_SRC, IMG_SRC, LINKS} from '../../../constants';

@Component({
  selector: 'app-language-icon',
  imports: [],
  templateUrl: './language-icon.component.html',
  styleUrl: './language-icon.component.scss',
})
export class LanguageIconComponent implements OnInit {
    @Input() languageName?: string;

    readonly links = LINKS;
    readonly iconSrc = ICON_SRC;

    languageLink?: string;
    languageSrc?: string;

    ngOnInit() {
        if (this.languageName) {
            //this.languageLink = this.links[this.languageName]
            //this.languageSrc = this.iconSrc[this.languageName]
        }
    }
}
