import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, AnimationBuilder } from '@ionic/angular';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {
  @ViewChild('roundButton', { static: true }) roundButton: any;


constructor(private animationCtrl: AnimationController, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/login']);
    }    
  }
}
