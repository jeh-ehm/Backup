import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.page.html',
  styleUrls: ['./home-landing.page.scss'],
})
export class HomeLandingPage implements OnInit {

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    } 
  }

  logOut() {
    this.authService.setLoggedIn(false)
    this.router.navigate(['/home'])
  }

}
