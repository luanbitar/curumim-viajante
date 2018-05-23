import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth/auth.service';
import { AlertService } from '../../shared/services/alert.service';
@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  public logout(): void {
    this.auth.logout().then(resolve => {
      console.log(resolve);
      this.alertService.open('Deslogado com sucesso', 'success');
    });
  }
}
