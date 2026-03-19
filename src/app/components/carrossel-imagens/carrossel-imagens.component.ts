import { Component } from '@angular/core';

interface GalleryImage {
  src: string;
  title: string;
}

@Component({
  selector: 'app-carrossel-imagens',
  templateUrl: './carrossel-imagens.component.html',
  styleUrls: ['./carrossel-imagens.component.scss']
})
export class CarrosselImagensComponent {
  readonly imagens: GalleryImage[] = [
    { src: 'assets/img/PedroFelipe.PNG', title: 'Profile portrait' },
    { src: 'assets/img/PedroFelipeDev.PNG', title: 'Developer identity' },
    { src: 'assets/img/PedroCruzeiroFamilia.PNG', title: 'Family moment' },
    { src: 'assets/img/Familia.jpg', title: 'Personal life' },
    { src: 'assets/img/PedroFelipeGLA250.PNG', title: 'Lifestyle frame' },
    { src: 'assets/img/CruzeiroPedroCarol.PNG', title: 'Travel and memories' },
    { src: 'assets/img/pf-logo-dev.png', title: 'Personal brand logo' },
    { src: 'assets/img/PF-512x512.png', title: 'Brand symbol' },
    { src: 'assets/img/angulartop.PNG', title: 'Angular identity' },
  ];

  imagemAtual = 0;

  mostrarAnterior(): void {
    this.imagemAtual = (this.imagemAtual - 1 + this.imagens.length) % this.imagens.length;
  }

  mostrarProxima(): void {
    this.imagemAtual = (this.imagemAtual + 1) % this.imagens.length;
  }

  selecionarImagem(index: number): void {
    this.imagemAtual = index;
  }
}
