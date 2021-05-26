import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from 'app/shared/classes/cars';
import { CarService } from 'app/shared/Services/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars : Cars[];
  constructor(private carservice: CarService, private router: Router) { }

  ngOnInit(): void {
    setInterval( ()=> {
      this.getcars();
    },2000);
  }
  getcars(){
    this.carservice.getCars()
    .subscribe( car =>{
      this.cars = car['cars'];
      console.log(this.cars);
    })
  }

  delete(id){
    
  }
}
