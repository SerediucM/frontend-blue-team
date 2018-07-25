import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../shared/user interface/user';
import { Course } from '../../shared/user interface/course';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  private baseUrl = 'http://192.168.210.113:8080';
  private userUrl = 'http://192.168.210.113:8080/users';
  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  private courseUrl = 'http://localhost:3000/course';
  // Get: login a user
  
  getUser(id: number): Observable<any> {
    const url = `${this.userUrl}`;
    return this.http.get<User>(url);
  }
  getCourse(id: number): Observable<any> {
    const url2 = `${this.courseUrl}`;
    return this.http.get<Course>(url2);
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //  POST: add a new user to the server 
  // addUser(user: User): Observable<User> {
  //   const urlP = `${this.userUrlP}`;
  //   // console.log ("USER:", user, url);
  //   return this.http.post<User>(urlP, user);
  // }

  addPost(url, user: any): Observable<User> {
    // console.log ("USER:", user, url);
    return this.http.post<User>(this.baseUrl + url, user, httpOptions);
  }
  login(user):Observable<User> {
    return this.addPost('/login', user)
  }
  Update(user):Observable<User> {
    return this.addPost('/users', user)
  }
  NewAcount(user):Observable<User> {
    return this.addPost('/create/user', user)
  }
}
