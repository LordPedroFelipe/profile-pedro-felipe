import { AfterViewInit, Component } from '@angular/core';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

@Component({
  selector: 'app-estudos',
  templateUrl: './estudos.component.html',
  styleUrls: ['./estudos.component.scss']
})
export class EstudosComponent implements AfterViewInit {
  constructor(private animationService: AnimationObserverService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.animationService.observarAnimacaoCards(), 0);
  }
}
