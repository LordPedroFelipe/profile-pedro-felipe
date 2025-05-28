import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationObserverService {
  observarAnimacaoCards(threshold: number = 0.1): void {
    const cards = document.querySelectorAll('.observed-card');
    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    cards.forEach(card => cardObserver.observe(card));
  }

  observarAnimacaoSkillButtons(sectionId: string, buttonClass: string, threshold: number = 0.3): void {
    const section = document.querySelector(`#${sectionId}`);
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const buttons = document.querySelectorAll(`.${buttonClass}`);
          buttons.forEach((btn, index) => {
            setTimeout(() => btn.classList.add('animate'), index * 100);
          });
          observer.disconnect();
        }
      });
    }, { threshold });

    observer.observe(section);
  }
}
