import { AfterViewInit, Component } from '@angular/core';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements AfterViewInit {
  constructor(private animationService: AnimationObserverService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.animationService.observarAnimacaoCards(), 0);
  }
}
