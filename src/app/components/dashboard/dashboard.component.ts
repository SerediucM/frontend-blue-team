import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, generate } from 'rxjs';
import { getLocalePluralCase } from '@angular/common';
import { ApiConnectionService } from '../../services/api-connection/api-connection.service';



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
  ;
  private serchtest: string;
  constructor(private userConn: ApiConnectionService) {
    this.getcol();
  }
  parentMessage1 = "Browse through best learning courses for Alexa";
  parentMessage2 = "Pick the one you like and start learning";
  limit: number = 6;
  RandomColor: {};
  course: string;
  startSearch: boolean = false;
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
  ngOnInit(): void {
    this.getUsers();
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
  ngAfterViewInit(): void {
    this.getUsers().subscribe(data => {
    });
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

