import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  faHouse,
  faBookmark,
  faMoon,
  faSun,
  faGauge,
  faRectangleList,
} from '@fortawesome/free-solid-svg-icons';
import { faPersonShelter } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  faSun = faSun;
  faMoon = faMoon;
  faGauge = faGauge;
  faHouse = faHouse;
  faBookmark = faBookmark;
  isDarkMode: boolean = false;
  isAdminPage: boolean = false;
  faPersonShelter = faPersonShelter;
  faRectangleList = faRectangleList;
  iconUrl: string = '/icons/quick-space-icon.svg';
  @ViewChild('themeToggle') themeToggle!: ElementRef;
  @ViewChild('themeToggleDarkRef') themeToggleDark!: ElementRef;
  @ViewChild('themeToggleLightRef') themeToggleLight!: ElementRef;

  constructor(private location: Location) {
    this.isDarkMode =
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.location.onUrlChange((url) => {
      this.isAdminPage = location.path().includes('/admin');
    });
    console.log(this.isAdminPage + ' - ' + location.path());
  }

  handleChangeThemeMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('color-theme', this.isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
