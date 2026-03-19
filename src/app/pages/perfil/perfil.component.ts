import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

interface MetricItem {
  VALUE: string;
  LABEL: string;
}

interface ContentItem {
  TITLE: string;
  TEXT: string;
  LINK?: string;
}

interface SkillGroup {
  TITLE: string;
  ITEMS: string[];
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements AfterViewInit, OnDestroy {
  metrics: MetricItem[] = [];
  highlightItems: ContentItem[] = [];
  featuredItems: ContentItem[] = [];
  publicationItems: ContentItem[] = [];
  skillGroups: SkillGroup[] = [];

  private langChangeSub?: Subscription;

  constructor(
    private animationService: AnimationObserverService,
    private translateService: TranslateService
  ) {}

  ngAfterViewInit(): void {
    this.loadContent();

    this.langChangeSub = this.translateService.onLangChange.subscribe((_event: LangChangeEvent) => {
      this.loadContent();
    });
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
  }

  private loadContent(): void {
    this.translateService.get('PROFILE').subscribe((profile) => {
      this.metrics = profile.METRICS ?? [];
      this.highlightItems = profile.HIGHLIGHTS?.ITEMS ?? [];
      this.featuredItems = profile.FEATURED?.ITEMS ?? [];
      this.publicationItems = profile.PUBLICATIONS?.ITEMS ?? [];
      this.skillGroups = profile.SKILLS?.GROUPS ?? [];

      setTimeout(() => {
        this.animationService.observarAnimacaoSkillButtons('skills-section', 'skill-chip', 0.2);
        this.animationService.observarAnimacaoCards(0.12);
      }, 80);
    });
  }
}
