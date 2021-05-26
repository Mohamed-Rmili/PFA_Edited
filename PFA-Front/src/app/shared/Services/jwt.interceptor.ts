import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { Users } from '../classes/users';
import { TokenService } from './token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private tokenService: TokenService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // add authorization header with jwt token if available

        const accessToken = this.tokenService.get();
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken
            }
        });
       
        // let currentUser = this.authenticationService.currentUserValue;
        // if (currentUser && currentUser.token) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${currentUser.token}`
        //         }
        //     });
        // }


        return next.handle(request);
    }
}