import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  private name: string;
  constructor(private router: ActivatedRoute,
    private userConn: ApiConnectionService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    return this.userConn.getUser(sessionStorage.getItem('email'));
  }
  ngAfterViewInit():void {
    this.getUsers().subscribe(data => {
      this.name = data.objects[0].firstName +" " +data.objects[0].lastName
      console.log("Name:", this.name);

    });
   }
}
