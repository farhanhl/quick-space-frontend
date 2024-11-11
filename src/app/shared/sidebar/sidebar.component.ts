import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  faHouse,
  faBookmark,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  iconUrl: string = '/icons/quick-space-icon.svg';
  faHouse = faHouse;
  faBookmark = faBookmark;
  faSun = faSun;
  faMoon = faMoon;
  isDarkMode: boolean = false;
  @ViewChild('themeToggle') themeToggle!: ElementRef;
  @ViewChild('themeToggleDarkRef') themeToggleDark!: ElementRef;
  @ViewChild('themeToggleLightRef') themeToggleLight!: ElementRef;

  constructor() {
    this.isDarkMode =
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  handleChangeThemeMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('color-theme', this.isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
