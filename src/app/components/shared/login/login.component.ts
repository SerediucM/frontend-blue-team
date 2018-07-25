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
  pass: string = 'password';
  pass1: string = 'password';
  pass2: string = 'password';
  pass3: string = 'password';
  titlu: string = '';
  activ: string;
  state1: string = "hide";
  state2: string = "show";
  state3: string = "hide";
  state4: string = "hide";
  state5: string = "hide";
  checkVerify: boolean = false;
  private loginInputEmail: string;
  private loginInputPassword: string;
  private createinInputEmail: string;
  private createinInputPassword: string;
  private createinInputlast: string;
  private createinInputfirst: string;
  private resetinInputPassword: string;
  private resetinInputEmail: string;
  private resetinInputEmailConfirm: string;


  @Input() users: User[];
  isDisplayed: boolean = false;
  constructor(private router: ActivatedRoute,
    private rout: Router,
    private location: Location,
    private userConn: ApiConnectionService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    var login={
      email: this.loginInputEmail,
      password: this.loginInputPassword
    }
    this.userConn.login(login as User).subscribe(data => {
      console.log('asd', data);
    })
    // var gotResult = false;
    // this.getUsers().subscribe(data => {
    //   console.log(data);
    //   data.forEach(item => {
    //     if (!gotResult) {
    //       if (username == item.email && password == item.password) {
    //         console.log("Db", item.email, item.password)
    //         localStorage.setItem('id', item.user_id);
    //         console.log("Citire localStorage", localStorage.getItem('id'));
    //         this.reset(e);
    //         this.rout.navigate(['dashboard']);
    //         gotResult = true;
    //       } else if (username == item.email && password != item.password) {
    //         this.err = "User and password is invalid";
    //         gotResult = true;
    //       } else if (username != item.email && password != item.password) {
    //         console.log(username, item.email, password, item.password)
    //         console.log(data)
    //         this.err = "This account does not exist. Please register";
    //         this.secondMessage = false;
    //         //gotResult=true;
    //       }
    //     }
    //   });
    // });
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
        console.log("creat cu succes");
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
    console.log("Am ajuns");
    var confpassword = this.resetinInputEmailConfirm;
    var gotResult = false;
    var userreset = {
      email: this.resetinInputEmail,
      password: this.resetinInputPassword
    };
    this.getUsers().subscribe(data => {
      data.forEach(item => {
        if (!gotResult) {
          if (this.resetinInputEmail== item.email && this.resetinInputPassword == confpassword) {
            this.reset(f);
            // this.state1="hide";
            // this.state2 ="show";
            // this.state3 = "hide";
            // this.state4 = "hide";
            gotResult = true;
          } else if (this.resetinInputEmail == item.email && this.resetinInputPassword!= item.password) {
            this.errR = "pass nu sunt ok ";
            gotResult = true;
          } else {
            this.errR = "This account does not exist. Please register";
            gotResult = true;
          }
        }
      });
    });
  }
  getUsers() {
    const id = +this.router.snapshot.paramMap.get('id');
    return this.userConn.getUser(id)
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
    e.target.elements[5].checked = false;
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
      console.log("am ajuns la ocio2")
    }
    else {
      this.pass2 = "password";
      console.log("am ajuns la ocio3")
    }
  }
  VisiblePass3() {
    if (this.pass3 === "password") {
      this.pass3 = "text";
      console.log("am ajuns la ocio2")
    }
    else {
      this.pass3 = "password";
      console.log("am ajuns la ocio3")
    }
  }
}
