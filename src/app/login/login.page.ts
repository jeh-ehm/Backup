import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {Router} from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  usernameField!: string; 
  passwordField!: string;

  private unsubscribe$ = new Subject<void>();
  constructor(private loginService: LoginService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.setLoggedIn(false);
  }

  handleLogin() {
    
    const credentials = { username: this.usernameField, password: this.passwordField };
    
    // Dummy API Login Implementation
    this.loginService.login(credentials)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        {
          next: response => {
            if (response.greeting === "Login Success!") {
              this.authService.setLoggedIn(true);
              this.router.navigate(['./home-screen']);
            } else {
              console.log("Wrong Password");
            }
          },
          error: error => console.log(error)
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}