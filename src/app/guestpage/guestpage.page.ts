import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guestpage',
  templateUrl: './guestpage.page.html',
  styleUrls: ['./guestpage.page.scss'],
})
export class GuestpagePage implements OnInit {

  isToastOpen = false;
      
  constructor(private router: Router) { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  goBack(){
    this.router.navigate(['/home'])
  }

}
