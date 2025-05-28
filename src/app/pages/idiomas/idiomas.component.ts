import { AfterViewInit, Component } from '@angular/core';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss']
})
export class IdiomasComponent implements AfterViewInit {
  constructor(private animationService: AnimationObserverService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.animationService.observarAnimacaoCards(), 0);
  }
}