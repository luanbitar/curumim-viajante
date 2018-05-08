import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class UsersModule { }
