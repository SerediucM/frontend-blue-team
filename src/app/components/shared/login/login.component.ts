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
  model: any = {};
  err: string;
  pass: string='password';
  secondMessage:boolean = true;
  state1:string="hide";
  state2:string="show";
  state3:string="hide";
  state4:string="hide";
  state5:string="hide";

   @Input() users: User[];
   isDisplayed: boolean = false;
  constructor(private router: ActivatedRoute ,
              private rout:Router,
              private location: Location,
              private userConn: ApiConnectionService
  ) { }
  
  ngOnInit():void {
    this.getUsers();
  }
  log(x){
    this.err="";
    this.secondMessage = true;
  }
  reset(e){
    e.target.elements[0].value="";
    e.target.elements[1].value="";

  }
  VisiblePass(){
    if(this.pass==="password"){
   this.pass="text";
    }
    else{
      this.pass="password";
    }
    console.log("am ajuns la ocio")
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
     var username = e.target.elements[0].value;
     var password = e.target.elements[1].value;

      var gotResult = false;
      this.getUsers().subscribe(data => {
        data.forEach(item => {
          if (!gotResult) {
            if(username==item.email && password==item.password){
              console.log(username,password, "ok")
              this.reset(e);
              this.rout.navigate(['dashboard']);
              gotResult=true;
  
            } else if (username==item.email && password!=item.password) {
              this.err="User and password is invalid";
              gotResult=true;
  
            } else {
              console.log(username, item.email, password, item.password)
              console.log(data)
              this.err ="This account does not exist.Please register";
              this.secondMessage = false;
              gotResult=true;
            }
          }
        });
      });
  }
    // CREATE ACCOUNT
    add(e){
      e.preventDefault();
      //  this.state1="hide";
      //  this.state2 ="show";
      // this.state3 = "hide";
      // this.state4 = "hide";
      var id = Math.floor(Math.random()*100)
      var last_name =e.target.elements[0].value;
      var name =e.target.elements[1].value;
      var email =e.target.elements[2].value;
      var password =e.target.elements[3].value;
      var userr ={
        id : id,
        last_name : last_name,
        name : name,
        email : email,
        password : password
      };
       this.userConn.addUser(userr as User).subscribe(data=>{
       })
    }
  // SingUp
  createCont(){ 
    this.state1 = "show";
    this.state2 = "hide";
    this.state3 = "hide";
    this.state4 = "hide";
  }
  // Reset it->Email
  // ResetEmail(){
  //   this.state1="hide";
  //   this.state2 ="hide";
  //   this.state3 = "show";
  //   this.state4 = "hide";
  // }
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
