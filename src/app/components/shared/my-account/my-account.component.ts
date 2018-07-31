import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/user interface/user';
import { Location } from '@angular/common';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit, AfterViewInit {
  @Input() users: User;
  private loggedUse: string;
  passaccount = 'password';
  private name: string;
  private password: string;
  private email: string;
  private token: string;
  private loggedUser = {};
  private namesplit = {};
  pass: string = 'password';
  closeform1 = true;
  closeform2 = true;
  closeform3 = true;
  private selectedFile = null;
  isDisplayed: boolean = true;
  state1: string = "show";
  state2: string = "show";
  state3: string = "show";
  showX: boolean = false;
  showX1: boolean = false;
  showX2: boolean = false;
  bdr = "1px solid white";
  bdr1 = "1px solid white";
  bdr2 = "1px solid white";

  constructor(private router: ActivatedRoute,
    private rout: Router,
    private location: Location,
    private userConn: ApiConnectionService,
    private http: HttpClient,
  ) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    return this.userConn.getUser(sessionStorage.getItem('email'));
  }
  ngAfterViewInit(): void {
    this.getUsers().subscribe(data => {
      this.name = data.objects[0].firstName + " " + data.objects[0].lastName;
      this.password = data.objects[0].password;
      this.email = data.objects[0].email;
      this.token = data.objects[0].resetToken
    });
  }
  onFileSelected(event) {
    this.selectedFile;
    console.log("Img", this.selectedFile)
    sessionStorage.setItem('img', this.selectedFile);
    return this.selectedFile;
  }

  Save(password, email) {
    console.log("Img", this.selectedFile)
    this.namesplit = this.name.split(" ");
    var newuser = {
      //  this.selectedFile; img 
      lastName: this.namesplit[1],
      firstName: this.namesplit[0],
      password: password,
      email: email
    };
    this.userConn.Update(newuser as any).subscribe(data => {
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
  logoutuser() {
    this.userConn.postToken(this.token as any).subscribe((data: any) => {
    })
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('resetToken');
  }
  showbtn() {
    this.showX = true;
    this.showX1 = false;
    this.showX2 = false;
    this.bdr = "1px solid yellow";
    this.bdr1 = "1px solid white";
    this.bdr2 = "1px solid white";
  }
  showbtn1() {
    this.showX = false;
    this.showX1 = true;
    this.showX2 = false;
    this.bdr = "1px solid white";
    this.bdr1 = "1px solid yellow";
    this.bdr2 = "1px solid white";
  }
  showbtn2() {
    this.showX = false;
    this.showX1 = false;
    this.showX2 = true;
    this.bdr = "1px solid white";
    this.bdr1 = "1px solid white";
    this.bdr2 = "1px solid yellow";
  }
  x_pressed() {
    this.state1 = "hide";
  }
  x_pressed1() {
    this.state2 = "hide";
  }
  x_pressed2() {
    this.state3 = "hide";
  }

}
