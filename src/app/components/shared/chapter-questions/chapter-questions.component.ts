import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css']
})
export class ChapterQuestionsComponent implements OnInit {

  limit = [1,2];
  constructor() { }
  
  ngOnInit() {
  }

}
