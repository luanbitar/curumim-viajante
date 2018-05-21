import { AlertComponent } from './alert.component';
import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public snackBar: MatSnackBar,
    public alertComponent: AlertComponent
  ) { }

  public open(message: string, type = 'success'): void {
    const ref = this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: `alert-${type}`
    });
  }
}
