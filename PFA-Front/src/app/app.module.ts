import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './Auth/user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { MapsComponent } from './Driver/maps/maps.component';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './Auth/login/login.component';
import { ForgetPasswdComponent } from './Auth/forget-passwd/forget-passwd.component';
import { TripsListComponent } from './Driver/trips-list/trips-list.component';
import { DriversListComponent } from './Admin/drivers-list/drivers-list.component';
import { DriverdashComponent } from './Driver/driverdash/driverdash.component';
import { AdmindashComponent } from './Admin/admindash/admindash.component';
import { CarsListComponent } from './Admin/cars-list/cars-list.component';
import { AuthService } from './shared/Services/auth.service';
import { JarwisService } from './shared/Services/jarwis.service';
import { TokenService } from './shared/Services/token.service';
import { JwtInterceptor } from './shared/Services/jwt.interceptor';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ForgetPasswdComponent,
    TripsListComponent,
    DriversListComponent,
    DriverdashComponent,
    AdmindashComponent,
    CarsListComponent,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    JarwisService,
    TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
