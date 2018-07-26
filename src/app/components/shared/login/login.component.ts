import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/user interface/user';
import { Location } from '@angular/common';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   model: any = {};
   err: string;
   errC:string;
   errR: string;
   titlu = '';
   activ: string;
   state1 = "hide";
   state2= "show";
   state3= "hide";
   state4 = "hide";
   state5 = "hide";
  checkVerify: boolean = false;
  private pass = 'password';
  private pass1 = 'password';
  private pass2= 'password';
  private pass3 = 'password';
  user: any={};
  private loginInputEmail: string;
  private loginInputPassword: string;
  private createinInputEmail: string;
  private createinInputPassword: string;
  private createinInputlast: string;
  private createinInputfirst: string;
  private resetinInputPassword: string;
  private resetinInputEmail: string;
  private resetinInputEmailConfirm: string;
  private Username: string;

  @Input() users: User[];
  isDisplayed: boolean = false;
  constructor(private router: ActivatedRoute,
    private rout: Router,
    private location: Location,
    private userConn: ApiConnectionService
  ) { }
  ngOnInit(): void {
  }
  getUsers() {
    const email = this.loginInputEmail;
    console.log(email);
    return this.userConn.getUser(email)
  }
  loginUser(e) {
    e.preventDefault();
    var login={
      email: this.loginInputEmail,
      password: this.loginInputPassword
    }
    this.userConn.login(login as User).subscribe((data: any) => {
      if(data.success==true)
      {
        this.user = data.objects 
        console.log("data",data.objects);
        sessionStorage.setItem('resetToken', this.user[0].resetToken );
        sessionStorage.setItem('email', this.user[0].email );
        this.Username= this.user[0].firstName + " " + this.user[0].lastName 
        console.log("Concatenare name", this.Username);
        this.rout.navigate(['dashboard']);
        this.errC="";
        this.reset(e);
      }
      else 
      if(data.success==false)
      {
        this.errC="The provided email address doesn't belong to any existing account";
        console.log(data.message)
      }
    })
  }
  // CREATE ACCOUNT
  add(e) {
    e.preventDefault();
    this.checkVerify = true;
    var userr = {
      lastName: this.createinInputlast,
      firstName: this.createinInputfirst,
      email: this.createinInputEmail,
      password: this.createinInputPassword
    };
    this.userConn.NewAcount(userr as User).subscribe((data : any) => {
      if(data.success==true)
      {
        this.state1 = "hide";
        this.state2 = "show";
        this.state3 = "hide";
        this.state4 = "hide";
        this.errC="";
      this.reset(e);
      }
      else 
      if(data.success==false)
      {
        this.errC=data.message;
        console.log(data.message)
      }
    },
      (err) => {
        console.log('err', err);
    })
  }
  //reset pass-login
  ResetComplet(f) {
    f.preventDefault();
    var gotResult = false;
    var userreset = {
      email: this.resetinInputEmail,
      password: this.resetinInputPassword
    };
    if(this.resetinInputEmailConfirm === this.resetinInputPassword )
    {
      this.userConn.NewReset(userreset as User).subscribe((data : any) => {
        if(data.success==true)
      {
        this.state1 = "hide";
        this.state2 = "show";
        this.state3 = "hide";
        this.state4 = "hide";
        this.errC="";
        this.reset(f);
      }
      else 
      if(data.success==false)
      {
        this.errC=data.message;
        console.log(data.message)
      }
      });
    }else
    {
      this.errC="Confirm password is invalid";
    }
  }
  log(x) {
    this.err = "";
    this.errR = "";
  }
  reset(e) {
     this.loginInputEmail ="";
    this.loginInputPassword="" ;
    this.createinInputEmail="" ;
    this.createinInputPassword="";
    this.createinInputlast="";
    this.createinInputfirst="";
    this.resetinInputPassword="" ;
    this.resetinInputEmail="";
    this.resetinInputEmailConfirm ="";
  }
  // SingUp->login
  createCont() {
    this.state1 = "show";
    this.state2 = "hide";
    this.state3 = "hide";
    this.state4 = "hide";
  }
  //reset Email din login
  ResetPass() {
    this.state1 = "hide";
    this.state2 = "hide";
    this.state3 = "hide";
    this.state4 = "show";
  }
  VisiblePass() {
    if (this.pass === "password") {
      this.pass = "text";
    }
    else {
      this.pass = "password";
    }
  }
  VisiblePass1() {
    if (this.pass1 === "password") {
      this.pass1 = "text";
    }
    else {
      this.pass1 = "password";
    }
  }
  VisiblePass2() {
    if (this.pass2 === "password") {
      this.pass2 = "text";
    }
    else {
      this.pass2 = "password";
    }
  }
  VisiblePass3() {
    if (this.pass3 === "password") {
      this.pass3 = "text";
    }
    else {
      this.pass3 = "password";
    }
  }
}
