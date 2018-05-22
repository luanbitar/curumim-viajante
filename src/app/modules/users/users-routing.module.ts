import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';

const routes: Routes = [
  {
    path: 'perfil',
    component: MainNavbarComponent,
    children: [
      {
        path: '',
        component: ProfileComponent
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
