import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements AfterViewInit {
  experiences: any[] = [];
  constructor(
    private animationService: AnimationObserverService,
    private translate: TranslateService
  ) {}

  ngAfterViewInit(): void {
    this.carregarExperiencias();
    setTimeout(() => this.animationService.observarAnimacaoCards(), 0);
  }

  carregarExperiencias(): void {
    this.translate.get('EXPERIENCE').subscribe((res: any[]) => {
      this.experiences = res;
  
      // Aguarda o DOM renderizar os novos cards antes de observar
      setTimeout(() => this.animationService.observarAnimacaoCards(), 0);
    });
  }
}
