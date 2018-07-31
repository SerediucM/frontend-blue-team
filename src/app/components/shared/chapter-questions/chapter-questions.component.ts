import { Component, OnInit } from '@angular/core';
import { Question } from '../../../shared/question/question';

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
    this.allQuestions.pop()

  }
  showI(){
    this.showInput = !this.showInput;

  }


  saveQuestion() {
    this.newQuestion = <Question>{ title: this.newTitle, answers: this.newAnswer }

    if (this.newTitle == "" || this.newAnswer[0] == undefined) {
      this.err = "Title or answer missing !"
    }
    else {
      console.log("Ce afiseaza intrebarea", this.newAnswer[0])
      this.allQuestions.push(this.newQuestion)
      this.newTitle = '';
      this.newAnswers = [''];
      this.newAnswer = [];
      this.err = ""
    }
  }


  constructor() { }

  ngOnInit() {


  }

}



