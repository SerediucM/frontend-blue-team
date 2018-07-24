import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {User} from '../../../shared/user interface/user';
import {Location} from '@angular/common';
import {ApiConnectionService} from '../../../services/api-connection/api-connection.service';
import { Course } from '../../../shared/user interface/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  constructor(private router: ActivatedRoute,
              private rout:Router,
              private location: Location,
              private userConn: ApiConnectionService) {
                this.getCourses().subscribe(data => {
                  this.mycourses=data.supplies;
                  
                    this.course_image = data[0].images;
                    this.small_description = data[0].small_description;
                    this.long_description = data[0].long_description;  
                    
                });             
              }
  
  @Input() childMessage: string;
  parentMessage1 = "Browse through all Finance courses for Alexa";
  parentMessage2 = "Pick the one you like and start learning";

  private mycourses = [];
  
  private course_image:string[];
  private small_description:string[];
  private long_description:string[];
  ngOnInit() {
  }

ngAfterViewInit():void {
    this.getCourses().subscribe(data => {
      this.mycourses=data.supplies;
      
        this.course_image = data[0].images;
        this.small_description = data[0].small_description;
        this.long_description = data[0].long_description;
        
        this.mycourses=data;
        console.log(this.mycourses);
        
    });
   }
getCourses(){
    const id = +this.router.snapshot.paramMap.get('id');
    return this.userConn.getCourse(id)
   }

}
