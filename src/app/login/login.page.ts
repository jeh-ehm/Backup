import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  usernameField!: string; 
  passwordField!: string;

  private unsubscribe$ = new Subject<void>();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {

    const credentials = { username: this.usernameField, password: this.passwordField };

    if (this.usernameField === 'Test' && this.passwordField === '1234') {
      this.router.navigate(['./home-screen']);
    } else {
      console.log("Wrong Credentials");
    }
    
    // Dummy API Login Implementation
    // this.loginService.login(credentials)
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe(
    //     {
    //       next: response => {
    //         console.log(response),
    //         this.router.navigate(['./home-screen']);
    //       },
    //       error: error => console.log(error)
    //     }
    //   );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
