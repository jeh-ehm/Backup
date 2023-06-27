import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  usernameField!: string; 
  passwordField!: string;

  private unsubscribe$ = new Subject<void>();
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  handleLogin() {

    const credentials = { username: this.usernameField, password: this.passwordField };

    this.loginService.login(credentials)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (response) => {
          // Handle successful login response
          console.log(response);
        },
        (error) => {
          // Handle error
          console.error(error);
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
