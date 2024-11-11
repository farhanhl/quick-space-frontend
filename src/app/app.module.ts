import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReservationComponent } from './pages/reservation/reservation.component';

@NgModule({
  declarations: [AppComponent, ReservationComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
