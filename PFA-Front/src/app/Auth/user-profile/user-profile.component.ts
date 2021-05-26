import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DriverService } from 'app/shared/Services/driver.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  editProfile: FormGroup;
//monsieur l partie hedhi khalitha, khater mazelt 3endi faza na9sa fl sidebar ken tetdhakar, maw kol role 3enda sidebar tokhrojla
  constructor(private fb : FormBuilder, private userservice : DriverService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
    this.editProfile = this.fb.group({
      Lastname: [this.user.name],
      Firstname: [],
      Username:[],
      Email: [],
      IDnumber: [],
      Password:[],
      Address: [],
      License: [],
      Image: [],
      Automode: [],
      Sex: [],
      DoB: []

    })
  }
  edit(){
    this.userservice.updateUser(this.editProfile.value, this.user.user.id)
    .subscribe(data => console.log(data), error => console.log(error) );
  }

}
