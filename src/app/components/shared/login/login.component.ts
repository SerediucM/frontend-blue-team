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
   @Input() users: User;

  constructor(private router: ActivatedRoute ,
              private rout:Router,
              private location: Location,
              private userConn: ApiConnectionService
  ) { }
  
  ngOnInit():void {
    this.getUser();
  }
  //  getUsers(): void {
  //   this.userConn.getUsers().subscribe(data => this.users = data);
  //  }
  getUser(): void  {
    const id = +this.router.snapshot.paramMap.get('id');
    this.userConn.getUser(id).subscribe(data => {
      console.log(data)
    });
}
  loginUser(e){
    e.preventDefault();
    console.log(e);
     var username = e.target.elements[0].value;
     var password = e.target.elements[1].value;
    
    if(username == "admin" && password == 'admin'){
      console.log(username,password, "ok")
      this.rout.navigate(['dashboard']);
    }
  }
}
