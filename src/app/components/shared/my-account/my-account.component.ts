import { Component, OnInit, Input } from '@angular/core';
// import {Router, ActivatedRoute } from '@angular/router';
// import {User} from '../../../shared/user interface/user';
// import {Location} from '@angular/common';
// import {ApiConnectionService} from '../../../services/api-connection/api-connection.service';



@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
 

  constructor(
    // private router: ActivatedRoute ,
    //          private rout:Router,
    //          private location: Location,
    //          private userConn: ApiConnectionService

  ) { }

  ngOnInit():void {
    // this.getUsers();
  }

  // loginUser(e){
  //   e.preventDefault();
  //   console.log(e);
  //   this.getUsers().subscribe(data => {
  //   data.forEach(item => {
       
  //  });
  //   });



}
