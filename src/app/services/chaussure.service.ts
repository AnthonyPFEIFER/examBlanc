import { Injectable } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { Observable, throwError } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChaussureService {
  chaussures: Chaussure[];
  apiUrl = 'http://localhost:3000/chaussure';
  constructor(private httpClient: HttpClient) {
  }
  getAllChaussures(): Observable<Chaussure[]> {
    return this.httpClient.get<Chaussure[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getChaussureById(id: number): Observable<Chaussure> {
    // J'effectue une requête de type get sur le serveur
    // Si il y a un echec, je réessaie puis je traite l'erreur
    return this.httpClient.get<Chaussure>(this.apiUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  add(chaussure: Chaussure): Observable<Chaussure> {
    /*   */
    return this.httpClient.post<Chaussure>(this.apiUrl, chaussure).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  edit(chaussureToEdit: Chaussure): Observable<Chaussure> {
    return this.httpClient.put<Chaussure>(this.apiUrl + '/' + chaussureToEdit.id, chaussureToEdit).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  deleteChaussure(id: number): Observable<Chaussure> {
    return this.httpClient.delete<Chaussure>(this.apiUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError));
  }
  /*   deleteChaussure(chaussure: Chaussure): Observable<Chaussure[]> {
      return this.httpClient.delete<Chaussure>(this.apiUrl + '/' + chaussure.id, chaussure).pipe(
        retry(1),
        catchError(this.handleError)
      );
    } */
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
