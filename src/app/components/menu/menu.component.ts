import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedTabIndex = 0;
  isMobile = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  onTabChange(index: number): void {
    this.selectedTabIndex = index;
    const routes = ['/perfil', '/experience', '/studies', '/languages', '/contacts'];
    this.router.navigate([routes[index]]);
  }

  navigateTo(route: string, index: number): void {
    this.selectedTabIndex = index;
    this.router.navigate([route]);
  }
}
