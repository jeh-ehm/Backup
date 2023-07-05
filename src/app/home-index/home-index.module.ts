import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeIndexPageRoutingModule } from './home-index-routing.module';

import { HomeIndexPage } from './home-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeIndexPageRoutingModule
  ],
  declarations: [HomeIndexPage]
})
export class HomeIndexPageModule {}
