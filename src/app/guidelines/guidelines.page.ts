import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.page.html',
  styleUrls: ['./guidelines.page.scss'],
})
export class GuidelinesPage implements OnInit {

  constructor(private router: Router, private animationCtrl: AnimationController, private elementRef: ElementRef) { }

  ngOnInit() {
  }

  goBack() {
    this.show("0", "100%", 1 , 0);
    setTimeout(() => {
      this.router.navigate(['./home-screen']);
    }, 350);
  }

 ionViewDidEnter() {
    this.show("100%", "0", 0, 1);
  }

  show(upVal: string, downVal: string, upOpac: number, downOpac: number) {
    const element = this.elementRef.nativeElement.querySelector('.animate-on-load');
    if (element) {
      const animation: Animation = this.animationCtrl
        .create()
        .addElement(element)
        .duration(400)
        .easing('ease-in-out')
        .keyframes([
          { offset: 0, opacity: upOpac, transform: 'translateY(' + upVal + ')' },
          { offset: 1, opacity: downOpac, transform: 'translateY(' + downVal + ')' },
        ]);

      animation.play();
    }
  }

}
