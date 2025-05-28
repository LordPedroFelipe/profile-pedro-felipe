import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.component.html',
  styleUrls: ['./estudos.component.scss']
})
export class EstudosComponent implements AfterViewInit, OnDestroy {
  private langChangeSub!: Subscription;

  constructor(
    private animationService: AnimationObserverService,
    private translateService: TranslateService
  ) {}

  ngAfterViewInit(): void {
    // Primeira chamada após renderizar o componente
    setTimeout(() => this.animationService.observarAnimacaoCards(), 100);

    // Nova chamada sempre que trocar idioma
    this.langChangeSub = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      setTimeout(() => this.animationService.observarAnimacaoCards(), 100);
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}
