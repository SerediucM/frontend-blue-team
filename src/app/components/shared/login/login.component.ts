import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {User} from '../../../shared/user interface/user';
import {Location} from '@angular/common';
import {ApiConnectionService} from '../../../services/api-connection/api-connection.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  state1:string="hide";
  state2:string="show";
  state3:string="hide";
  state4:string="hide";
  state5:string="hide";

   @Input() users: User;
   isDisplayed: boolean = false;
  constructor(private router: ActivatedRoute ,
              private rout:Router,
              private location: Location,
              private userConn: ApiConnectionService
  ) { }
  
  ngOnInit():void {
    this.getUsers();
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
     var username = e.target.elements[0].value;
     var password = e.target.elements[1].value;
     this.getUsers().subscribe(data => {
    data.forEach(item => {
       if(username == item.email && password == item.password){
        console.log(username,password, "ok")
        this.rout.navigate(['dashboard']); 
  }  
   });
    });
  }
  // SingUp
  createCont(){ 
    this.state1 = "show";
    this.state2 = "hide";
    this.state3 = "hide";
    this.state4 = "hide";
  }
  // CREATE ACCOUNT
  SpreLogin(){
    this.state1="hide";
    this.state2 ="show";
    this.state3 = "hide";
    this.state4 = "hide";
  }
  // Reset it->Email
  ResetEmail(){
    this.state1="hide";
    this.state2 ="hide";
    this.state3 = "show";
    this.state4 = "hide";
  }
  //reset Email-pass
  ResetPass(){
    this.state1="hide";
    this.state2 ="hide";
    this.state3 = "hide";
    this.state4 = "show";
  }
    //reset pass-login
    ResetComplet(){
      this.state1="hide";
      this.state2 ="show";
      this.state3 = "hide";
      this.state4 = "hide";
    }
  getUsers()  {
    const id = +this.router.snapshot.paramMap.get('id');
    return this.userConn.getUser(id)
  } 
}
