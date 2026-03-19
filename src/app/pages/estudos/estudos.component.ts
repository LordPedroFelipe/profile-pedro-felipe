import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

interface StudyItem {
  INSTITUTION: string;
  DATE: string;
  COURSE: string;
  TYPE: string;
}

@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.component.html',
  styleUrls: ['./estudos.component.scss']
})
export class EstudosComponent implements AfterViewInit, OnDestroy {
  studies: StudyItem[] = [];

  private langChangeSub?: Subscription;

  constructor(
    private animationService: AnimationObserverService,
    private translateService: TranslateService
  ) {}

  ngAfterViewInit(): void {
    this.loadStudies();

    this.langChangeSub = this.translateService.onLangChange.subscribe((_event: LangChangeEvent) => {
      this.loadStudies();
    });
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
  }

  private loadStudies(): void {
    this.translateService.get('STUDIES.ITEMS').subscribe((items: StudyItem[]) => {
      this.studies = items ?? [];
      setTimeout(() => this.animationService.observarAnimacaoCards(0.15), 80);
    });
  }
}
