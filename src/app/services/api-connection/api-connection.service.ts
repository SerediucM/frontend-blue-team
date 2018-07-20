import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../shared/user interface/user'; 
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../../message.service';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  private userUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  // Get: login a user
 getUser(id: number): Observable<any>
 {
  const url = `${this.userUrl}`;
  return this.http.get<User>(url);
 }
  //  POST: add a new user to the server 
 addUser(user: User): Observable<User>{
  const url = `${this.userUrl}`;
   console.log ("USER:", user, url);
   return this.http.post<User>(url, user)
 }

  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
//  private handleError<T> (operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {
//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead
//     // TODO: better job of transforming error for user consumption
//     this.log(`${operation} failed: ${error.message}`);
//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };
// }  
  }
