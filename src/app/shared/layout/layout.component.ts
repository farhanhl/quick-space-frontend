import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  isLoading: boolean = false;
  isWithSidebarAndFooter: boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(private location: Location) {
    this.location.onUrlChange((url) => {
      this.isWithSidebarAndFooter = !url.includes('/login');
    });
  }
}
