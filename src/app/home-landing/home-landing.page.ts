import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.page.html',
  styleUrls: ['./home-landing.page.scss'],
})
export class HomeLandingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut() {
    this.router.navigate(['home'])
  }

}
