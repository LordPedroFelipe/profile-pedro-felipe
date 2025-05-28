import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.component.html',
  styleUrls: ['./estudos.component.scss']
})
export class EstudosComponent implements AfterViewInit  {
  @ViewChild('experienceSection', { static: false }) experienceSection!: ElementRef;


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
    }, { threshold: 0.1 });
  
    cards.forEach(card => cardObserver.observe(card));
  }
}
