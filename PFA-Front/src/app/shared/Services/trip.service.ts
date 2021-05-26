import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../classes/trip';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TripService {

  // handeleError c'est une fonction des gestions des erreurs ...
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for trip consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public urls = 'http://127.0.0.1:8000/api/v1/Trips'; // url pour la récupération de la partie backend(laravel)

  constructor(private http: HttpClient) { }
  //* afficher tous les trips*/

  getTrips (): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.urls).pipe(
      tap(_ => console.log('fetched Trip')),
      catchError(this.handleError<Trip[]>('getTrips', []))
    );
  }

 
  //* ajouter trip*/
  createTrip(trip: Trip): Observable<any> {
    return this.http.post<Trip>(this.urls, trip, httpOptions)
    .pipe(
      tap((newTrip: Trip) => console.log(`added hero w/ id=${newTrip.id}`)),
      catchError(this.handleError<Trip>('create'))
    );
  }
  
  //* Afficher trip*/
    getTrip(id: number): Observable<any> {
      return this.http.get(`${this.urls}/${id}`);
    }

  //* modifier trip*/
  updateTrip(trip: Trip,id: number): Observable<any> {
    return this.http.put<Trip>(`${this.urls}/${id}`, trip, httpOptions).pipe(
      tap((newTrip: Trip) => console.log(`utilisateur modifier id=${newTrip.id}`)),
      catchError(this.handleError('probleme modification', trip))
    );
  }

  //* supprimer trip*/
    deleteTrip(trip: Trip | number): Observable<Trip> {
    const id = typeof trip === 'number' ? trip : trip.id;
    const url = `${this.urls}/${id}`;
    //console.log(id);

    return this.http.delete<Trip>(url, httpOptions).pipe(
      tap(_ => console.log(` utilisateur supprimer  id=${id}`)),
      catchError(this.handleError<Trip>('delete'))
    );
  } 
}
