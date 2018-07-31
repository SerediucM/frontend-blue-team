import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, generate } from 'rxjs';
import { getLocalePluralCase } from '@angular/common';
import { ApiConnectionService } from '../../services/api-connection/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Pipe({
  name: 'filter'
})
export class DashboardComponent implements OnInit {
  // heroes$: Observable <Course[]>;
  // private searchTerms = new Subject<string>();
  public show: boolean = false;

  // 

  // 
  ;
  private serchtest: string;
  parentMessage1 = "Browse through best learning courses for Alexa";
  parentMessage2 = "Pick the one you like and start learning";
  constructor(private userConn: ApiConnectionService,
    private router: ActivatedRoute,
    private rout: Router) {
    this.getcol();
  }
  limit: number = 6;
  RandomColor: {};
  course: string;
  private id: number;
  startSearch: boolean = false;
  categories: {};
  newTitle ='';
  // 
  cat = [''];
  // 
  courses = ['Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activit', 'Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activit', 'Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activity', 'Sports'];
  getcol() {
    return this.RandomColor = {
      "background": 'linear-gradient(70deg,' + ' #' + Math.floor(Math.random() * 16777215).toString(16) + ' 30%, ' + ' #' + Math.floor(Math.random() * 16777215).toString(16) + ' 70%)',
      "border-radius": "10px",
      "color": "white",
      "padding": "10px 24px",
      "cursor": "pointer",
      "width": "214px",
      "height": "140px",
      "display": "inline",
      "font-weight": "bold",
      "font-size": "18px",
    };
  }

  // 

  createQuestion() {
    this.show = !this.show;
  }

  // 
  getCourseid(id) {
    sessionStorage.setItem('idcurs', id);
    this.userConn.getCourse(id).subscribe(data => {
      console.log("Id cursului accesat", data.objects);
      this.rout.navigate(['courses']);
    });
  }
  getCateg() {
    return this.userConn.getCategory();
  }
  ngAfterViewInit(): void {
    this.getCateg().subscribe(data => {
      this.categories = data.objects;
      // 
      this.cat = data.objects;
      // 
      console.log("Categ:", this.categories);
    });
  }
  saveCourse(){
    // this.cat.push('');
    var newuser = {
      name: this.newTitle,
    };
    this.userConn.postCategorie(newuser as any).subscribe(data => {
    })

  }
  
  DiscoverMore() {
    if (this.limit <= this.courses.length) {
      this.limit = this.limit + 6;
    }
  }
  getCourse(course: string) {
    return course;
  }
  getUsers() {
    return this.userConn.getUser(sessionStorage.getItem('email'));
  }
  ngOnInit() {
    this.getCateg();
  }
}
  // search(searchTerm: string) {
  //   this.editHero = undefined;
  //   if (searchTerm) {
  //     this.heroesService.searchHeroes(searchTerm)
  //       .subscribe(heroes => this.heroes = heroes);
  //   }
  // }
  // @Input() childMessageCategory: string;

