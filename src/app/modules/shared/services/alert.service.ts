import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  public open(message: string, type = 'success'): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: `alert-${type}`
    });
  }
}
