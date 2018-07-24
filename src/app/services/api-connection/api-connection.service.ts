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
  private userUrl = 'http://192.168.210.113:8080/users';
  private userUrlP = 'http://192.168.210.113:8080/create/user';
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
  const urlP = `${this.userUrlP}`;
  // console.log ("USER:", user, url);
   return this.http.post<User>(urlP, user);
 }
  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
} 
  }
