import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Users } from 'app/shared/classes/users';
import { CarService } from 'app/shared/Services/car.service';
import { DriverService } from 'app/shared/Services/driver.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  
  addUser: FormGroup;
  addCar: FormGroup;
  drivers : Users[];
  user: any;

  constructor(private driverservice: DriverService, private carservice: CarService, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.getDrivers();
    
    this.addUser = this.fb.group({
      cin: [],
      lastname: [],
      firstname: [],
      username:[],
      email: [],
      password:[],
      address: [],
      license: [],
      image: [],
      automode: [],
      sex: [],
      dob: []
    })

    this.addCar = this.fb.group({
      vin: [],
      drid: []
    })

  }
  getDrivers(){
    this.driverservice.getUsers()
    .subscribe( driver =>{
      this.drivers = driver['users'];
      console.log(this.drivers);
    })
  }
  adduser(){
    this.driverservice.createUser(this.addUser.value)
    .subscribe(data => console.log(data), error => console.log(error) );
  }
  
  addcar(){
    this.carservice.createCar(this.addCar.value)
    .subscribe(data => console.log(data), error => console.log(error) );
  }
}
