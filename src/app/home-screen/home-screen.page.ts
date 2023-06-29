import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AnimationController, AnimationBuilder } from '@ionic/angular';



@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {
  @ViewChild('roundButton', { static: true }) roundButton: any;


constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

}
