import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = ['Astrology', 'Finances', 'Grammar'];
  public showList = false;
  delRow;
  data: Array<any> = [];
  status = [false, false, false];
  constructor() { }

  ngOnInit() {
  }
  Controls(i) {
    if (this.status[i] === true) { this.status[i] = false }
    else
      this.showList[i] = true;
  }
  verify(index) {
    if (this.status[index] === true) { this.status[index] = false }
    else
      this.status[index] = true;
  }
  DeleteRow(row) {
    this.data.splice(
      row, 1);
  }

}
