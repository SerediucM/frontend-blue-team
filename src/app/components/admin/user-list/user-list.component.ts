import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = ['Astrology', 'Finances', 'Grammar'];
  userss:{}
  public showList = false;
  delRow;
  data: any[];
  status = [false, false, false];
  constructor(private userConn: ApiConnectionService,
    private router: ActivatedRoute,
    private rout: Router) { }

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
    this.delRow = this.data.indexOf(row);
    this.data.splice(this.delRow, 1);
  }
  ngAfterViewInit(): void {
    this.userConn.getUsers().subscribe(data => {
      this.userss = data.objects;
      console.log("Users:", data.objects);
    });
  }
}
