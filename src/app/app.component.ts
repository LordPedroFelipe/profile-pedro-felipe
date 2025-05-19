import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pedro Felipe';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pt']);

    // Detecta idioma salvo ou navegador
    const savedLang = localStorage.getItem('lang');
    const browserLang = translate.getBrowserLang();
    const defaultLang = savedLang || (browserLang === 'pt' ? 'pt' : 'en');

    translate.setDefaultLang('en');
    translate.use(defaultLang);
  }

  trocarIdioma(idioma: string) {
    this.translate.use(idioma);
    localStorage.setItem('lang', idioma); // salva preferência
  }
}
