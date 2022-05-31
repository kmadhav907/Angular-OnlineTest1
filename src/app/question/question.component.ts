import { Component, OnInit } from '@angular/core';
import { questions } from 'src/assets/questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  name:string = "";
  questions:any = [];
  currentQuestion:number = 0;
  points:number = 0;
  counter:number = 60;
  correctAnswer:number = 0;
  incorrectAnswer:number = 0;
  progress:string = "0"
  isQuizCompleted:boolean = false;

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    console.log(this.questions)
  }
  getAllQuestions(){
    this.questions = questions.questions;
  }
  incrementQuestion(){
    this.currentQuestion++;
  }
  decrementQuestion(){
    this.currentQuestion--;
  }
  getAnswer(questionNumber:number, option:any){
    if(option.correct){
      this.points += 10;
      this.correctAnswer++;
    }else {
      this.incorrectAnswer--;
    }
    setTimeout(()=> {
    
      if(this.correctAnswer === this.questions.length - 1){
        this.isQuizCompleted = true
      }
      this.currentQuestion++;
      this.getProgressPercentage();
    }, 1000)
  }
  resetQuiz(){
    this.correctAnswer = 0;
    this.incorrectAnswer = 0;
    this.points = 0;
    this.currentQuestion = 0;
    this.progress = "0";
  }
  getProgressPercentage(){
    this.progress = ((this.currentQuestion/this.questions.length)*100).toString();
    return this.progress;
  }
}
