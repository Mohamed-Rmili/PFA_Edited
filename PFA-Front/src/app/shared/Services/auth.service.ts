import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
@Injectable()
export class AuthService {
  //private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  loggedIn: BehaviorSubject<boolean>;

  // private userState = new BehaviorSubject<boolean>(this.Token.loggedIn());
  // authState = this.userState.asObservable(); 

  constructor(private Token: TokenService) { 
    this.loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
    const authStatus = this.loggedIn.asObservable();
  
  

  }
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  // setAuthStatus(value: boolean) {
  //   this.userState.next(value);
  // }
}
