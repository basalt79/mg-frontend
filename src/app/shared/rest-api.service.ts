import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Player } from './player';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getPlayers(): Observable<Player> {
    return this.http.get<Player>(this.apiURL + '/player')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPlayer(id): Observable<Player> {
    return this.http.get<Player>(this.apiURL + '/player/id/?q=' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createPlayer(player): Observable<Player> {
    return this.http.post<Player>(this.apiURL + '/player', JSON.stringify(player), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updatePlayer(id, player): Observable<Player> {
    return this.http.put<Player>(this.apiURL + '/player/' + id, JSON.stringify(player), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  deletePlayer(id) {
    return this.http.delete<Player>(this.apiURL + '/player/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
