import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements AfterViewInit {
  @ViewChild('experienceSection', { static: false }) experienceSection!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const cards = document.querySelectorAll('.observed-card');
  
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            cardObserver.unobserve(entry.target); // desativa após animar
          }
        });
      }, { threshold: 0.3 });
  
      cards.forEach(card => cardObserver.observe(card));
    }, 0);
  }
  
}
