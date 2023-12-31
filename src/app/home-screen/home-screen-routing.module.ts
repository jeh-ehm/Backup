import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenPage } from './home-screen.page';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenPage,
    children: [
      {
        path: 'threat',
        loadChildren: () => import('../threat/threat.module').then( m => m.ThreatPageModule)
      },
      {
        path: 'incident',
        loadChildren: () => import('../incident/incident.module').then( m => m.IncidentPageModule)
      },
      {
        path: 'guidelines',
        loadChildren: () => import('../guidelines/guidelines.module').then( m => m.GuidelinesPageModule)
      },
      {
        path: 'tips',
        loadChildren: () => import('../tips/tips.module').then( m => m.TipsPageModule)
      },
      {
        path: 'emergency-contacts',
        loadChildren: () => import('../emergency-contacts/emergency-contacts.module').then( m => m.EmergencyContactsPageModule)
      },
      {
        path: 'home-landing',
        loadChildren: () => import('../home-landing/home-landing.module').then( m => m.HomeLandingPageModule)
      },
      {
        path: '',
        redirectTo: '/home-screen/home-landing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home-screen/home-landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScreenPageRoutingModule {}
