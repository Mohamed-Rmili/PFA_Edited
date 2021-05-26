import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'app/shared/classes/users';
import { DriverService } from 'app/shared/Services/driver.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers : Users[];
  constructor(private driverservice: DriverService, private router: Router) { }

  ngOnInit(): void {
    setInterval( ()=> {
      this.getDrivers();
    },2000);
  }
  getDrivers(){
    this.driverservice.getUsers()
    .subscribe( driver =>{
      this.drivers = driver['users'];
      console.log(this.drivers);
    })
  }

  show(cin)
  {
    localStorage.setItem('cin',cin);
    this.router.navigate(['/trips-list']);
  }

  delete(id){
    
  }
}
