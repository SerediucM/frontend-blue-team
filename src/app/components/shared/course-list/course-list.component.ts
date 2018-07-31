import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/user interface/user';
import { Location } from '@angular/common';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Course } from '../../../shared/user interface/course';
import { FORMERR } from 'dns';
import { element } from 'protractor';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
@Pipe({
  name: 'filter'
})
export class CourseListComponent implements OnInit {

  public show: boolean = false;

  constructor(private router: ActivatedRoute,
    private rout: Router,
    private userConn: ApiConnectionService) {
  }
  parentMessage1 = "Browse through all"
  parentMessage2 = "Pick the one you like and start learning";
  parentMessage3 = "Sports";
  parentMessage4 = "courses for Alexa";
  private id = null;
  limit: number = 6;
  private mycourses = [];
  courseList:{};

  DiscoverMore() {
    if (this.limit <= this.mycourses.length) {
      this.limit = this.limit + 6;
    }
  }
  ngOnInit() {

  }

  createQuestion() {
    this.show = !this.show;
  }
  ngAfterViewInit(): void {
    this.id = sessionStorage.getItem("idcurs")
    this.userConn.getCourse(this.id).subscribe(data => {
       this.courseList=data.objects;
      });
  }
  courseid(id){
    sessionStorage.setItem('idcapitol', id);
    this.userConn.getchapters(id).subscribe(data => {
        this.rout.navigate(["courses/:courseId"]);
          });
  }
  getRandomColor = function () {
    return {
      borderLeft: '2px solid #' + Math.floor(Math.random() * 16777215).toString(16)
    }
  };

}
