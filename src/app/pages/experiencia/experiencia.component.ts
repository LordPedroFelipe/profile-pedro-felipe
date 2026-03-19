import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

interface ExperienceItem {
  TITLE: string;
  DATE: string;
  COMPANY: string;
  LOGO: string;
  DESCRIPTION: string[];
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements AfterViewInit, OnDestroy {
  experiences: ExperienceItem[] = [];

  private langChangeSub?: Subscription;

  constructor(
    private animationService: AnimationObserverService,
    private translate: TranslateService
  ) {}

  ngAfterViewInit(): void {
    this.loadExperiences();

    this.langChangeSub = this.translate.onLangChange.subscribe((_event: LangChangeEvent) => {
      this.loadExperiences();
    });
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
  }

  private loadExperiences(): void {
    this.translate.get('EXPERIENCE.JOBS').subscribe((jobs: ExperienceItem[]) => {
      this.experiences = jobs ?? [];
      setTimeout(() => this.animationService.observarAnimacaoCards(0.15), 80);
    });
  }
}
