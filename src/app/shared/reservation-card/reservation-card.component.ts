import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.css',
})
export class ReservationCardComponent {
  @Input() agenda?: string;
  @Input() pic?: string;
  @Input() room?: string;
  @Input() date?: string;
  @Input() from?: string;
  @Input() to?: string;
}
