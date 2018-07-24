import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/user interface/user'; 
import { Course } from '../../shared/user interface/course'; 
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../../message.service';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  private userUrl = 'http://localhost:3000/users';
  private courseUrl = 'http://localhost:3000/course';
 getUser(id: number): Observable<any>
 {
  const url = `${this.userUrl}`;
  return this.http.get<User>(url);
 }
 getCourse(id:number): Observable<any>{
   const url2 = `${this.courseUrl}`;
   return this.http.get<Course>(url2);
 }
  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}  

  }
