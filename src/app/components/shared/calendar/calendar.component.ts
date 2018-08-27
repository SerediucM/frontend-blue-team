import { Component, OnInit, Input } from '@angular/core';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters = "Chapter"
  limit: number = 4;
  txt_sliced: string;
  private id = null;
  chapterList:{};
  constructor(private router: ActivatedRoute,
    private rout: Router,
    private userConn: ApiConnectionService) {
    this.slice_content(this.dummy_txt)
  }
  @Input() childMessage: string;
  parentMessage1 = "Internet Banner Advertisiong Most Reliable Forms Of Web Advertising";
  parentMessage2 = "There is a lot of excitiong stuff going on in the stars above us that make astronomy so much fun";
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
  ngAfterViewInit(): void {
    this.id = sessionStorage.getItem("idcapitol")
    console.log("Id din capitol-capitol" ,this.id);
    this.userConn.getchapters(this.id).subscribe(data => {
      console.log("asta e" , this.id);
       this.chapterList=data.objects;
        console.log("asta eeee" , this.chapterList);
      });
  }

  chapterid(id){
    sessionStorage.setItem('idchapter', id);
    console.log("id capitolului ",id)
    this.userConn.getquestions(id).subscribe(data => {
      console.log("Am ajuns");
       console.log("Id intrebare accesat",data.objects);
         this.rout.navigate(["courses/:courseId/:chapterId"]);
          });
  }

}
