import { AfterViewInit, Component } from '@angular/core';
import { AnimationObserverService } from 'src/app/services/animation-observer.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements AfterViewInit {
  readonly contacts = [
    {
      label: 'CONTACT_PAGE.WHATSAPP',
      href: 'https://wa.me/5547997716565',
      value: '+55 47 99771 6565',
      icon: 'phone'
    },
    {
      label: 'CONTACT_PAGE.LINKEDIN',
      href: 'https://www.linkedin.com/in/pedrofelipeti',
      value: 'linkedin.com/in/pedrofelipeti',
      icon: 'assets/img/linkedin.png'
    },
    {
      label: 'CONTACT_PAGE.INSTAGRAM',
      href: 'https://www.instagram.com/pedrofelipedev',
      value: '@pedrofelipedev',
      icon: 'assets/img/instagram.jpg'
    },
    {
      label: 'CONTACT_PAGE.GITHUB',
      href: 'https://github.com/LordPedroFelipe',
      value: 'github.com/LordPedroFelipe',
      icon: 'assets/img/git.png'
    },
    {
      label: 'CONTACT_PAGE.EMAIL',
      href: 'mailto:pf.souza15@gmail.com',
      value: 'pf.souza15@gmail.com',
      icon: 'assets/img/email.png'
    }
  ];

  constructor(private animationService: AnimationObserverService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.animationService.observarAnimacaoCards(0.15), 80);
  }

  isMaterialIcon(icon: string): boolean {
    return !icon.includes('/');
  }
}
