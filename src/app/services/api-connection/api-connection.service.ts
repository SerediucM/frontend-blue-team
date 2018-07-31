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
  private userUrl = 'http://192.168.210.113:8080/user';
  private categoryUrl = 'http://192.168.210.113:8080/categories';
  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  getUser(email: string): Observable<any> {
    const token = sessionStorage.getItem("resetToken");
    const httpGetOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'reset_token': token
      })
    };
    const url = `${this.userUrl}`;
    return this.http.get<User>(url + "?email=" + email, httpGetOptions);
  }
  postToken(email: string): Observable<any> {
    const token = sessionStorage.getItem("resetToken");
    const httpGetOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'reset_token': token
      })
    };
    console.log("Token service", token);
    const url = `${this.baseUrl}`;
    return this.http.post<any>(url + "/logout", token, httpGetOptions1);
  }




  // putUpdate(user: User): Observable<any> {
  postCategorie(categorie : any): Observable<any> {
    const token = sessionStorage.getItem("resetToken");
    const httpGetOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'reset_token': token
      })
    };
    console.log("Update token service", token);
    const url = `${this.baseUrl}`;
    return this.http.post<any>(url + "/create/category",categorie, httpGetOptions1);
  }
    putUpdate(user: User): Observable<any> {
      const token = sessionStorage.getItem("resetToken");
      const httpGetOptions1 = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'reset_token': token
        })
      };

    console.log("Token service", token);
    const url = `${this.baseUrl}`;
    return this.http.put<any>(url + "/user",user, httpGetOptions1);
    }

  getCategory(): Observable<any> {
    const token = sessionStorage.getItem("resetToken");
    const httpGetOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'reset_token': token
      })
    };
    const url = `${this.categoryUrl}`;
    return this.http.get<any>(url, httpGetOptions);
  }
  getUsers(): Observable<any> {
    const token = sessionStorage.getItem("resetToken");
    const httpGetOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'reset_token': token
      })
    };
    const url = `${this.baseUrl}`;
    console.log("Am ajuns in service");
    return this.http.get<User>(url + "/users", httpGetOptions);
  }
  getCourse(id: number): Observable<any> {
    console.log("Id couses services", id)
    const token = sessionStorage.getItem("resetToken");
    const httpGetOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'reset_token': token
      })
    };
    const url = `${this.baseUrl}`;
    return this.http.get<any>(url + "/courses?category=" + id, httpGetOptions);
  }
  getchapters(id: number): Observable<any> {
    console.log("Id chapters services", id)
    const token = sessionStorage.getItem("resetToken");
    const httpGetOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'reset_token': token
      })
    };
    const url = `${this.baseUrl}`;
    return this.http.get<any>(url + "/chapters?course_id=" + id, httpGetOptions);
  }
  getquestions(id: number): Observable<any> {
    console.log("Id chapters services", id)
    const token = sessionStorage.getItem("resetToken");
    const httpGetOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'reset_token': token
      })
    };
    const url = `${this.baseUrl}`;
    return this.http.get<any>(url + "/questions?id=" + id, httpGetOptions);
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  addPost(url, user: any): Observable<User> {
    // console.log ("USER:", user, url);
    return this.http.post<User>(this.baseUrl + url, user, httpOptions);
  }
  login(user): Observable<User> {
    return this.addPost('/login', user)
  }
  Update(user): Observable<User> {
    return this.addPost('/users', user)
  }
  NewAcount(user): Observable<User> {
    return this.addPost('/create/user', user)
  }
  NewReset(user): Observable<User> {
    return this.addPost('/reset', user)
  }
  NewUserEmail(user): Observable<User> {
    return this.addPost('/reset', user) //pt user/emai
  }
  logout(user): Observable<any> {
    return this.addPost('/logout', user) //trimit token
  }
}
