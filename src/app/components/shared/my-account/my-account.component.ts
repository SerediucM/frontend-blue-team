import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {User} from '../../../shared/user interface/user';
import {Location} from '@angular/common';
import {ApiConnectionService} from '../../../services/api-connection/api-connection.service';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit, AfterViewInit {
 @Input() users: User;
// private loggedUser = {};
 passaccount= 'password';
  isDisplayed: boolean = true;
 
private loggedUser = [];
 constructor(private router: ActivatedRoute ,
             private rout:Router,
             private location: Location,
             private userConn: ApiConnectionService,
             private http: HttpClient,            
 ) {  }

ngAfterViewInit():void {
  this.getUsers().subscribe(data => {
      this.loggedUser = data[1]; 
      console.log(this.loggedUser, "dupa")
  });
 }
 Save (name,password,email){
  console.log(name, password, email)
  var newuser={
    lastName: name,
    password: password,
    email: email
  };
  this.userConn.Update( newuser as any).subscribe(data => {
  })
 }
  ngOnInit():void {
    this.getUsers();
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
  }
  VisiblePass1() {
    if (this.passaccount === "password") {
      this.passaccount = "text";
    }
    else {
      this.passaccount = "password";
    }
  }
   
      
    logoutuser(){ 
      localStorage.removeItem('id');
    }
getUsers(){
  const email = this.router.snapshot.paramMap.get('email');
  return this.userConn.getUser(email)
}
}
