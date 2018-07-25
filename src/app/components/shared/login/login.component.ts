import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/user interface/user';
import { Location } from '@angular/common';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  err: string;
  errR: string;
  pass: string = 'password';
  pass1: string = 'password';
  pass2: string = 'password';
  pass3: string = 'password';
  titlu: string = '';
  secondMessage: boolean = true;
  activ: string;
  state1: string = "hide";
  state2: string = "show";
  state3: string = "hide";
  state4: string = "hide";
  state5: string = "hide";
  checkVerify: boolean = false;

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
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    var login={
      email: username,
      password: password
    }
    this.userConn.login(login as User).subscribe(data => {
      console.log('asd', data);
    }, (err) => {
      console.log('err', err);
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
    var id = Math.floor(Math.random() * 100)
    var lastName = e.target.elements[0].value;
    var firstName = e.target.elements[1].value;
    var email = e.target.elements[2].value;
    var password = e.target.elements[3].value;
    this.checkVerify = true;
    var userr = {
      lastName: lastName,
      firstName: firstName,
      email: email,
      password: password
    };
    this.userConn.NewAcount(userr as User).subscribe(data => {
    })
  }
  //reset pass-login
  ResetComplet(f) {
    f.preventDefault();
    console.log("Am ajuns");
    var email = f.target.elements[0].value;
    var password = f.target.elements[1].value;
    var confpassword = f.target.elements[2].value;
    var gotResult = false;
    this.getUsers().subscribe(data => {
      data.forEach(item => {
        if (!gotResult) {
          if (email == item.email && password == confpassword) {
            this.reset(f);
            // this.state1="hide";
            // this.state2 ="show";
            // this.state3 = "hide";
            // this.state4 = "hide";
            gotResult = true;
          } else if (email == item.email && password != item.password) {
            this.errR = "pass nu sunt ok ";
            gotResult = true;
          } else {
            this.errR = "This account does not exist. Please register";
            this.secondMessage = false;
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
    this.secondMessage = true;
  }
  reset(e) {
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
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
