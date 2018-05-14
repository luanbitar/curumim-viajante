import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const routes: Routes = [
  {
    path: 'loading',
    component: LoadingSpinnerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedRoutingModule { }
