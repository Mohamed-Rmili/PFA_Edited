import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './Auth/login/login.component';
import { ForgetPasswdComponent } from './Auth/forget-passwd/forget-passwd.component';
import { DriversListComponent } from './Admin/drivers-list/drivers-list.component';
import { TripsListComponent } from './Driver/trips-list/trips-list.component';
import { DriverdashComponent } from './Driver/driverdash/driverdash.component';
import { AdmindashComponent } from './Admin/admindash/admindash.component';
import { UserProfileComponent } from './Auth/user-profile/user-profile.component';
import { MapsComponent } from './Driver/maps/maps.component';
import { CarsListComponent } from './Admin/cars-list/cars-list.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '', 
    component: AdminLayoutComponent,
    children: [
      // {path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'},  
      {path: 'drivers-list', component:DriversListComponent},
      {path: 'trips-list', component:TripsListComponent},
      {path: 'driver-dash', component:DriverdashComponent},
      {path: 'admin-dash', component:AdmindashComponent},
      {path: 'user-profile', component:UserProfileComponent},
      {path: 'map', component:MapsComponent},
      {path: 'cars-list', component:CarsListComponent}
    ]
  },
  {path: 'login', component:LoginComponent},
  {path: 'forget-password', component:ForgetPasswdComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
