import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReservationComponent } from './reservation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ReservationModule {}
