import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestpagePageRoutingModule } from './guestpage-routing.module';

import { GuestpagePage } from './guestpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestpagePageRoutingModule
  ],
  declarations: [GuestpagePage]
})
export class GuestpagePageModule {}
