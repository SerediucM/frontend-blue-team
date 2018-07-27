import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters = ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV', 'Chapter V', 'Chapter VI', 'Chapter VI'];
  limit: number = 4;
  txt_sliced: string;
  constructor() {
    this.slice_content(this.dummy_txt)
  }
  @Input() childMessage: string;
  parentMessage1 = "Internet Banner Advertisiong Most Reliable Forms Of Web Advertising";
  parentMessage2 = "There is a lot of  excitiong stuff going on in the stars above us that make astronomy so much fun";
  parentMessage3 = "FINANCE";

  dummy_txt = "Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data Dummy data";
  dummy_sliced = this.dummy_txt.slice(0, 100);

  slice_content(txt) {
    this.txt_sliced = txt.slice(0, 100)
    return this.txt_sliced;
  }
  showFullcurriculum() {
    this.limit = 50;
  }
  ngOnInit() {
  }

}
