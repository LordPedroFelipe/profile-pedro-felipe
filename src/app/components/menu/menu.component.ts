import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

interface NavItem {
  labelKey: string;
  route: string;
  icon: string;
  shortLabel: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMobile = false;
  currentRoute = '/profile';

  readonly navItems: NavItem[] = [
    { labelKey: 'MENU.PROFILE', route: '/profile', icon: 'person', shortLabel: 'Profile' },
    { labelKey: 'MENU.EXPERIENCE', route: '/experience', icon: 'work_history', shortLabel: 'Exp' },
    { labelKey: 'MENU.STUDIES', route: '/studies', icon: 'school', shortLabel: 'Studies' },
    { labelKey: 'MENU.LANGUAGES', route: '/languages', icon: 'translate', shortLabel: 'Lang' },
    { labelKey: 'MENU.CONTACTS', route: '/contacts', icon: 'alternate_email', shortLabel: 'Contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScreenSize();
    this.currentRoute = this.router.url || '/profile';

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = event.urlAfterRedirects || '/profile';
      });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 960;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
