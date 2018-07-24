import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor() { }
  
  @Input() childMessage1: string;
  @Input() childMessage2: string;
  
  ngOnInit() {
  }

}
