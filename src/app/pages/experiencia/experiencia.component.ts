import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements AfterViewInit {
  @ViewChild('experienceSection', { static: false }) experienceSection!: ElementRef;
  experiences: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.carregarExperiencias();
  
    // Atualiza experiências quando trocar de idioma
    this.translate.onLangChange.subscribe(() => {
      this.carregarExperiencias();
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.observarAnimacaoCards(), 0);
  }

  private observarAnimacaoCards(): void {
    const cards = document.querySelectorAll('.observed-card');
  
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          cardObserver.unobserve(entry.target); // Anima apenas uma vez
        }
      });
    }, { threshold: 0.3 });
  
    cards.forEach(card => cardObserver.observe(card));
  }

  carregarExperiencias(): void {
    this.translate.get('EXPERIENCE').subscribe((res: any[]) => {
      this.experiences = res;
  
      // Aguarda o DOM renderizar os novos cards antes de observar
      setTimeout(() => this.observarAnimacaoCards(), 0);
    });
  }
  
}
