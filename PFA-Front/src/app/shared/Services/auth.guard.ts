import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      console.log('currentUser.role',currentUser);
        if (currentUser) {
          
          console.log(route.data.role);
          if (route.data.role.indexOf(currentUser.user.role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(['/login']);
            return false;
          }
          
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
