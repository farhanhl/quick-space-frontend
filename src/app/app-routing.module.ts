import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'reservation',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/reservation/reservation.module').then(
        (m) => m.ReservationModule
      ),
  },
  {
    path: 'admin/login',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/admin/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin/dashboard',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/admin/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'admin/room',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/admin/room/room.module').then((m) => m.RoomModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
