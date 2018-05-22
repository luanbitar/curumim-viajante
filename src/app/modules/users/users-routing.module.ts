import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'perfil',
    component: MainNavbarComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
