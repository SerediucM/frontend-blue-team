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
private loggedUse :string;
passaccount= 'password';
private name: string;
private password: string;
private email: string;
private token: string;
private loggedUser = {};
private namesplit ={};
pass: string = 'password';
private selectedFile  = null;
isDisplayed: boolean = true;
 
 constructor(private router: ActivatedRoute ,
             private rout:Router,
             private location: Location,
             private userConn: ApiConnectionService,
             private http: HttpClient,            
 ) {  }
 ngOnInit():void {
  this.getUsers();
}
 getUsers() {
  return this.userConn.getUser(sessionStorage.getItem('email'));
}
ngAfterViewInit():void {
  this.getUsers().subscribe(data => {
    this.name = data.objects[0].firstName +" " +data.objects[0].lastName; 
    this.password= data.objects[0].password;
    this.email= data.objects[0].email;
    this.token = data.objects[0].resetToken
  });
 }
 onFileSelected (event){
  this.selectedFile;
  console.log("Img",this.selectedFile)
  sessionStorage.setItem('img', this.selectedFile );
  return this.selectedFile;
 }
 
 Save (password,email){
   console.log("Img",this.selectedFile)
  this.namesplit =  this.name.split(" ");
  var newuser={
    //  this.selectedFile; img 
    lastName: this.namesplit[1],
    firstName: this.namesplit[0],
    password: password,
    email: email
  };
  this.userConn.Update( newuser as any).subscribe(data => {
  })
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
    this.userConn.postToken(this.token as any).subscribe((data : any) => {
   })
   sessionStorage.removeItem('email');
   sessionStorage.removeItem('resetToken');
  }
}
