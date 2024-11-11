import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './loading/loading.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    LoadingComponent,
    ReservationCardComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    LoadingComponent,
    ReservationCardComponent,
  ],
})
export class SharedModule {}
