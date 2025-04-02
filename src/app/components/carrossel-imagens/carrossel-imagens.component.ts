import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel-imagens',
  templateUrl: './carrossel-imagens.component.html',
  styleUrls: ['./carrossel-imagens.component.scss']
})
export class CarrosselImagensComponent {
  imagens: string[] = [
    'assets/img/PedroFelipe.PNG',
    'assets/img/PedroFelipeDev.PNG',
    'assets/img/PedroCruzeiroFamilia.PNG',
    'assets/img/Familia.jpg',
    'assets/img/PedroFelipeGLA250.PNG',
    'assets/img/CruzeiroPedroCarol.PNG',
    'assets/img/angulartop.PNG',
    'assets/img/Via.PNG',
    'assets/img/OPAH.PNG'
  ];

  imagemAtual = 0;

  mostrarAnterior() {
    this.imagemAtual = (this.imagemAtual - 1 + this.imagens.length) % this.imagens.length;
  }

  mostrarProxima() {
    this.imagemAtual = (this.imagemAtual + 1) % this.imagens.length;
  }
}
