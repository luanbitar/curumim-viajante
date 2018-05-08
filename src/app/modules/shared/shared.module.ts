import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { SharedRoutingModule } from './shared-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

library.add(fas, far, fab);

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    FormsModule,
    FontAwesomeModule,
    LoadingSpinnerComponent,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule
  ]
})
export class SharedModule { }
