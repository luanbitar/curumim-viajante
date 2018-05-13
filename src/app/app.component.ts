import { AuthService } from './modules/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AuthService
  ) {}
}
