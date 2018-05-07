import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { SharedRoutingModule } from './shared-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

library.add(fas, far, fab);

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    FontAwesomeModule,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
