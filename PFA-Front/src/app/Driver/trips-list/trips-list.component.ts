import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'app/shared/Classes/trip';
import { TripService } from 'app/shared/Services/trip.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {
  user: any;
  trips: Trip[];
  cin: any;

  constructor(private actroute: ActivatedRoute, private tripservice: TripService, private router: Router) { }

  ngOnInit(): void {
    this.user= JSON.parse(localStorage.getItem('currentUsers'));
    /*
    if(this.user.role =="admin")
      this.cin = localStorage.getItem('cin');
    else
      this.cin = this.user.cin;
      */
    this.cin = 6023226;
   // setInterval( ()=> {
      this.getTrips();
   // },2000);
  }
  getTrips(){
    
    this.tripservice.getTrips()
    .subscribe( trip =>{
      this.trips = trip['trip'];
      console.log(this.trips);
      
      this.trips = this.trips.filter(s => {
        return s.CIN == this.cin;
      });
      console.log(this.trips);
    })
  }
  track(){
    this.router.navigate(['/map']);
  }
   
}


