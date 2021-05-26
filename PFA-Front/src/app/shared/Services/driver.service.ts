import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../classes/users';
import { tap, catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  // handeleError c'est une fonction des gestions des erreurs ...
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public urls = 'http://127.0.0.1:8000/api/v1/users'; // url pour la récupération de la partie backend(laravel)

  constructor(private http: HttpClient) { }
  //* afficher tous les conducteurs*/

  getUsers (): Observable<Users[]> {
    return this.http.get<Users[]>(this.urls).pipe(
      tap(_ => console.log('fetched Users')),
      catchError(this.handleError<Users[]>('getUsers', []))
    );
  }

 
  //* ajouter user*/
  createUser(user: Users): Observable<any> {
    return this.http.post<Users>(this.urls, user, httpOptions)
    .pipe(
      tap((newUser: Users) => console.log(`added hero w/ id=${newUser.id}`)),
      catchError(this.handleError<Users>('create'))
    );
  }
  
  //* Afficher user*/
    getUser(id: number): Observable<any> {
      return this.http.get(`${this.urls}/${id}`);
    }

  //* modifier user*/
  updateUser(user: Users,id: number): Observable<any> {
    return this.http.put<Users>(`${this.urls}/${id}`, user, httpOptions).pipe(
      tap((newUser: Users) => console.log(`utilisateur modifier id=${newUser.id}`)),
      catchError(this.handleError('probleme modification', user))
    );
  }

  //* supprimer user*/
    deleteUser(user: Users | number): Observable<Users> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.urls}/${id}`;
    //console.log(id);

    return this.http.delete<Users>(url, httpOptions).pipe(
      tap(_ => console.log(` utilisateur supprimer  id=${id}`)),
      catchError(this.handleError<Users>('delete'))
    );
  } 
}
