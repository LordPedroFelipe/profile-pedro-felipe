import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements AfterViewInit, OnDestroy {
  experiences: any[] = [];
  private langChangeSub!: Subscription;

  constructor(
    private animationService: AnimationObserverService,
    private translate: TranslateService
  ) {}

  ngAfterViewInit(): void {
    this.carregarExperiencias();

    // Escuta troca de idioma
    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.carregarExperiencias();
    });
  }

  carregarExperiencias(): void {
    this.translate.get('EXPERIENCE').subscribe((res: any[]) => {
      this.experiences = res;

      // Aguarda renderização dos cards
      setTimeout(() => this.animationService.observarAnimacaoCards(), 100);
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}
