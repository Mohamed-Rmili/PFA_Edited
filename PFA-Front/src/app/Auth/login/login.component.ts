import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl,  FormGroup, Validators } from '@angular/forms';
import { JarwisService } from 'app/shared/Services/jarwis.service';
import { TokenService } from 'app/shared/Services/token.service';
import { AuthService } from 'app/shared/Services/auth.service';
import { AuthenticationService } from 'app/shared/Services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  // submitted = false;
  // userEmails = new FormGroup({
  //   email: new FormControl('',[
  //     Validators.required,
  //     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  //   password: new FormControl('',[
  //     Validators.required,
  //     Validators.minLength(6)]),
  //   }); 

    error:any;
    constructor(
      public formBuilder: FormBuilder,
      public Jarwis: JarwisService,
      private Token: TokenService,
      public router: Router,
      private Auth: AuthService,
      private authservice: AuthenticationService
      ) {
        this.loginForm = this.formBuilder.group({
          email:[],
          password:[]
        })
       }

    ngOnInit() {
      
    }
    // get email(){
    //   return this.userEmails.get('email')
    //   }
      onSubmit() {
        // this.submitted =true;
        // console.log(this.userEmails.value);
        // this.authservice.login(this.userEmails.value).subscribe(
        //   data => this.handleResponse(data),
        //   error => this.handleError(error)
        // );
        this.Jarwis.login(this.loginForm.value).subscribe(
          data => {
            this.handleResponse(data);
          },
          error => {
            this.error = error.error;
          },() => {
            // localStorage.setItem('user', JSON.stringify(data));
            // this.Auth.changeAuthStatus(true);
            // this.loginForm.reset();
            // if(data.user.role == 'admin')
            //   this.router.navigateByUrl('/admin-dash');
            // if(data.user.role == 'driver')
            //   this.router.navigateByUrl('/driver-dash');


          }
        )
      }
    
      handleResponse(data) {
        this.Token.handle(data);
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        this.Auth.changeAuthStatus(true);
        if(data.user.role == 'admin')
          this.router.navigateByUrl('/admin-dash');
        if(data.user.role == 'driver')
          this.router.navigateByUrl('/driver-dash');
      }
    
      // handleError(error) {
      //   this.error = error.error.error;
      //   console.log(error);
      }

  // onReset() {
  //     // this.submitted = false;
  //     this.loginForm.reset();
  // }

    
    
