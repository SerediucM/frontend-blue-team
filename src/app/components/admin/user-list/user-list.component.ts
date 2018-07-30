import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = ['Astrology', 'Finances', 'Grammar'];
  public showList = false;
  constructor() { }

  ngOnInit() {
  }
  Controls() {
    if (this.showList === true) { this.showList = false }
    else
      this.showList = true;
  }

}
