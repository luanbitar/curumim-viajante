import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { fab, faFacebookF, faGooglePlusG, faGithub } from '@fortawesome/free-brands-svg-icons';

import { SharedRoutingModule } from './shared-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatGridListModule} from '@angular/material';

library.add(fas, far, fab,
  faFacebookF, faGooglePlusG, faGithub,
  faEnvelope);

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule
  ]
})
export class SharedModule { }
