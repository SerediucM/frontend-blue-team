import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters = ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV', 'Chapter V', 'Chapter VI', 'Chapter VI'];
  limit: number = 4;
  constructor() { }
  @Input() childMessage: string;
  parentMessage1 = "Internet Banner Advertisiong Most Reliable Forms Of Web Advertising";
  parentMessage2 = "There is a lot of  excitiong stuff going on in the stars above us that make astronomy so much fun";

  showFullcurriculum() {
    this.limit = 50;
  }
  ngOnInit() {
  }

}
