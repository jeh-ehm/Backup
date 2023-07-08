import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestpagePage } from './guestpage.page';

const routes: Routes = [
  {
    path: '',
    component: GuestpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestpagePageRoutingModule {}
