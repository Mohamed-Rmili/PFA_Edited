import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cars } from '../classes/cars';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // handeleError c'est une fonction des gestions des erreurs ...
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for Car consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public urls = 'http://127.0.0.1:8000/api/v1/cars'; // url pour la récupération de la partie backend(laravel)

  constructor(private http: HttpClient) { }
  //* afficher tous les cars*/

  getCars (): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.urls).pipe(
      tap(_ => console.log('fetched Cars')),
      catchError(this.handleError<Cars[]>('getCars', []))
    );
  }

 
  //* ajouter Car*/
  createCar(Car: Cars): Observable<any> {
    return this.http.post<Cars>(this.urls, Car, httpOptions)
    .pipe(
      tap((newCar: Cars) => console.log(`added hero w/ id=${newCar.id}`)),
      catchError(this.handleError<Cars>('create'))
    );
  }
  
  //* Afficher Car*/
    getCar(id: number): Observable<any> {
      return this.http.get(`${this.urls}/${id}`);
    }

  //* modifier Car*/
  updateCar(Car: Cars,id: number): Observable<any> {
    return this.http.put<Cars>(`${this.urls}/${id}`, Car, httpOptions).pipe(
      tap((newCar: Cars) => console.log(`utilisateur modifier id=${newCar.id}`)),
      catchError(this.handleError('probleme modification', Car))
    );
  }

  //* supprimer Car*/
    deleteCar(Car: Cars | number): Observable<Cars> {
    const id = typeof Car === 'number' ? Car : Car.id;
    const url = `${this.urls}/${id}`;
    //console.log(id);

    return this.http.delete<Cars>(url, httpOptions).pipe(
      tap(_ => console.log(` utilisateur supprimer  id=${id}`)),
      catchError(this.handleError<Cars>('delete'))
    );
  } 
}
