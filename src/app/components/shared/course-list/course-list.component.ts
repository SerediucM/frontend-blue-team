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

  constructor(private router: ActivatedRoute,
    private rout: Router,
    private location: Location,
    private userConn: ApiConnectionService) {
    // this.getCourses().subscribe(data => {
    //   this.mycourses = data.supplies;

    //   this.course_image = data[0].images;
    //   this.small_description = data[0].small_description;
    //   this.long_description = data[0].long_description;

    // });
  }

  parentMessage1 = "Browse through all"
  parentMessage2 = "Pick the one you like and start learning";
  parentMessage3 = "Sports";
  parentMessage4 = "courses for Alexa";

  limit: number = 6;
  private mycourses = [];

  DiscoverMore() {
    if (this.limit <= this.mycourses.length) {
      this.limit = this.limit + 6;
    }
  }

  // private _course_image: string[];
  // private _small_description: string[];
  // private _long_description: string[];

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getCourses().subscribe(data => {

      this.mycourses = data;
      // for (let i = 0; i < this.mycourses.length; i++) {
      //   this._course_image[i] = this.mycourses[i].images;
      //   this._small_description[i] = this.mycourses[i].small_description;
      //   this._long_description[i] = this.mycourses[i].long_description;

      // }
      // data.forEach(element => {
      //   for (let i = 0; i < element.length; i++) {

      //     this._course_image[i] = element[i].images;
      //     this._small_description[i] = element[i].small_description;
      //     this._long_description[i] = element[i].long_description;
      //   }

      // });
    });
  }
  getCourses() {
    const id = +this.router.snapshot.paramMap.get('id');
    return this.userConn.getCourse(id)
  }
  getRandomColor = function () {
    return {
      borderLeft: '2px solid #' + Math.floor(Math.random() * 16777215).toString(16)
    }
  };

}
