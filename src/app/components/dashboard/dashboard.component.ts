import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { getLocalePluralCase } from '@angular/common';



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
  constructor() {
  }
  limit: number = 6;

  startSearch: boolean = false;
  courses = ['Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activit', 'Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activit', 'Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activity', 'Sports'];

  ColorObj = {
    "background": "linear-gradient(225deg, lightblue 30%, cyan 70%)",
    "border-radius": "10px",
    "color": "white",
    "padding": "10px 24px",
    "cursor": "pointer",
    "width": "214px",
    "height": "140px",
    "display": "inline",
    "font-weight": "bold",
    "font-size": "18px"
  };
  generate() {

    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
      for (var i = 0; i < 6; i++) {
        var x = Math.round(Math.random() * 14);
        var y = hexValues[x];
        a += y;
      }
      return a;
    }

    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);

    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    return gradient;
  }

  DiscoverMore() {
    if (this.limit <= this.courses.length) {
      this.limit = this.limit + 6;
    }
  }
  getCourse(course: string) {
    return course;
  }
  getRandomColor = function () {
    return {
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
    }
  };



  // search(searchTerm: string) {
  //   this.editHero = undefined;
  //   if (searchTerm) {
  //     this.heroesService.searchHeroes(searchTerm)
  //       .subscribe(heroes => this.heroes = heroes);
  //   }
  // }
  // @Input() childMessageCategory: string;
  parentMessage1 = "Browse through best learning courses for Alexa";
  parentMessage2 = "Pick the one you like and start learning";
  ngOnInit() {
    // this.heroes$ = this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );
  }

}
