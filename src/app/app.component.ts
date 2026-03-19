import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly availableLangs = ['pt', 'en'];

  constructor(public translate: TranslateService) {
    this.translate.addLangs(this.availableLangs);

    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();
    const defaultLang = savedLang || (browserLang === 'pt' ? 'pt' : 'en');

    this.translate.setDefaultLang('pt');
    this.translate.use(defaultLang);
  }

  trocarIdioma(idioma: string): void {
    this.translate.use(idioma);
    localStorage.setItem('lang', idioma);
  }

  isActiveLang(idioma: string): boolean {
    return this.translate.currentLang === idioma;
  }
}
