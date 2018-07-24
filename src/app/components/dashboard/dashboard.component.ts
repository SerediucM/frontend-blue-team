import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor() {
   
   }
  limit:number = 6;
  
  courses = ['Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activit', 'Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activit', 'Astrology', 'Finances', 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks', 'Sports', 'Habbits', 'Activity', 'Sports'];
  ColorObj = {
    "background": "linear-gradient(225deg, lightblue 30%, cyan 70%)",
    "border-radius": "10px",
    "color": "white",
    "padding": "10px 24px", 
    "cursor": "pointer", 
    "width": "214px", 
    "height": "140px",
    "display": "inline" 
};
  DiscoverMore(){
    if(this.limit <= this.courses.length)
   {
      this.limit=this.limit+6;    
  }
}

  @Input() childMessage: string;
  parentMessage1 = "Browse through best learning courses for Alexa";
  parentMessage2 = "Pick the one you like and start learning";
  ngOnInit() {
  }

}
