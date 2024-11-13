import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './loading/loading.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    LoadingComponent,
    ReservationCardComponent,
    TableComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    LoadingComponent,
    ReservationCardComponent,
    FontAwesomeModule,
    TableComponent,
  ],
})
export class SharedModule {}
