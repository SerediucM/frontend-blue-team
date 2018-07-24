import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters =['Chapter I', 'Chapter II', 'Chapter II', 'Chapter IV'];

  constructor() { }
  @Input() childMessage: string;
  parentMessage1 = "Internet Banner Advertisiong Most Reliable Forms Of Web Advertising";
  parentMessage2 = "There is a lot of  excitiong stuff going on in the stars above us that make astronomy so much fun";
  ngOnInit() {
  }

}
