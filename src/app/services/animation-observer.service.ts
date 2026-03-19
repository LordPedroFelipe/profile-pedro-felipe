import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationObserverService {
  observarAnimacaoCards(threshold: number = 0.1): void {
    const elements = [
      ...Array.from(document.querySelectorAll('.observed-card')),
      ...Array.from(document.querySelectorAll('.observed-stagger > *')),
    ];

    const uniqueElements = Array.from(new Set(elements));
    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    uniqueElements.forEach((element) => cardObserver.observe(element));
  }

  observarAnimacaoSkillButtons(sectionId: string, buttonClass: string, threshold: number = 0.3): void {
    const section = document.querySelector(`#${sectionId}`);
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const buttons = document.querySelectorAll(`.${buttonClass}`);
          buttons.forEach((button, index) => {
            setTimeout(() => button.classList.add('animate'), index * 70);
          });
          observer.disconnect();
        }
      });
    }, { threshold });

    observer.observe(section);
  }
}
