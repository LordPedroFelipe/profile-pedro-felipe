import { AfterViewInit, Component } from '@angular/core';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements AfterViewInit {
  constructor(private animationService: AnimationObserverService) {}

  ngAfterViewInit(): void {
    this.animationService.observarAnimacaoSkillButtons('skills-section', 'skill-button', 0.3);
    this.animationService.observarAnimacaoCards(0.3);
  }
}
