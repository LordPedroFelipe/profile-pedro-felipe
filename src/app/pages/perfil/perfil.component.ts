import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements AfterViewInit {
  @ViewChild('skillsSection', { static: false }) skillsSection!: ElementRef;

  ngAfterViewInit(): void {
    // Animação dos botões de skill
    const skillsSection = document.querySelector('#skills-section');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const buttons = document.querySelectorAll('.skill-button');
          buttons.forEach((btn, index) => {
            setTimeout(() => btn.classList.add('animate'), index * 100);
          });
          skillObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
  
    if (skillsSection) {
      skillObserver.observe(skillsSection);
    }
  
    // Animação dos cards
    const cards = document.querySelectorAll('.observed-card');
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.3 });
  
    cards.forEach(card => cardObserver.observe(card));
  }
  
}
