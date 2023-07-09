import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-threat',
  templateUrl: './threat.page.html',
  styleUrls: ['./threat.page.scss'],
})
export class ThreatPage implements OnInit {
  isToastOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/home-screen'])
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
