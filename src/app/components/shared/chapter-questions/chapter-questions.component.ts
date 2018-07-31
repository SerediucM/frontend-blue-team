import { Component, OnInit } from '@angular/core';
import { Question } from '../../../shared/question/question';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css']
})
export class ChapterQuestionsComponent implements OnInit {
  private newQuestion: Question;
  public show: boolean = false;
  public showChapter: boolean = true;
  public showChapter2: boolean = true;
  public endChapter: boolean = false;
  private newTitle: string = '';
  private newAnswers = [''];
  private newAnswer = [];
  private err = "";
  public showInput: boolean = false;

  i = 1;
  data: any = [];
  delRow;
  showX = true;
  private id = null;
  questionsList: {};
  private allQuestions: Array<Question> = [
    {
      title: 'Title 1',
      answers: ['Answ1', 'Answ2']
    }, {
      title: 'Title 2',
      answers: ['Answ1', 'Answ2', 'Answ3', 'Answ4', 'Answ5']
    }, {
      title: 'Title 3',
      answers: ['Answ1', 'Answ2', 'Answ3']
    }, {
      title: 'Title 4',
      answers: ['Answ1', 'Answ2', 'Answ3']
    }
  ]
  constructor(private router: ActivatedRoute,
    private rout: Router,
    private userConn: ApiConnectionService) { }
  ngAfterViewInit(): void {
    this.id = sessionStorage.getItem("idchapter")
    this.userConn.getquestions(this.id).subscribe(data => {
      this.questionsList = data.objects;
      console.log("Intrebare ", data);
    });
  }

  deleteQ() {
    this.allQuestions.pop();
  }
  addAnswer() {
    this.newAnswers.push('');
  }
  createQuestion() {
    this.show = !this.show;
  }
  nextChapter() {
    this.showChapter = !this.showChapter
    this.endChapter = !this.endChapter
  }
  previousChapter() {
    this.showChapter = !this.showChapter
    this.endChapter = false;
  }
  delete() {
    this.questionsList[this.i - 1] = null;

  }
  showI() {
    this.showInput = !this.showInput;

  }
  saveQuestion() {
    this.newQuestion = <Question>{ title: this.newTitle, answers: this.newAnswer }
    if (this.newTitle == "" || this.newAnswer[0] == undefined) {
      this.err = "Title or answer missing !"
    }
    this.questionsList[this.i] = this.newQuestion;
    this.newTitle = '';
    this.newAnswers = [''];
    this.newAnswer = [];
    this.err = ""
    this.i++;
  }

  ngOnInit() {
  }

}



