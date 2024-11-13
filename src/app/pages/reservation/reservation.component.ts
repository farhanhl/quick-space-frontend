import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent {
  faCalendar = faCalendar;
  faClock = faClock;
  roomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      agenda: ['', Validators.required],
      room: ['', Validators.required],
      pic: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.roomForm.valid) {
      console.log('Form Submitted!', this.roomForm.value);
    } else {
      console.log('Form is invalid');
      this.roomForm.markAllAsTouched();
    }
  }
}
