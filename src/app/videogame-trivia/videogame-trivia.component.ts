import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Questions } from "../models/questions";
import { Answers } from "../models/answers";
import { VideogameTriviaService } from '../videogame-trivia.service';

@Component({
  selector: 'app-videogame-trivia',
  templateUrl: './videogame-trivia.component.html',
  styleUrls: ['./videogame-trivia.component.css']
})
export class VideogameTriviaComponent implements OnInit {

  trivia: any[];
  quiz: Quiz = new Quiz(null);
  quizTitle: string;
  section = 'start';
  constructor(private triviaService: VideogameTriviaService) { }

  ngOnInit(): void {
    this.trivia = this.triviaService.get();
    this.quizTitle = this.trivia[0].id;
  }

  startQuiz(quizTitle: string) {
    this.triviaService.getQuiz(quizTitle).subscribe(res => {
      this.quiz = new Quiz(res);
    });
    this.section = 'trivia';
  }

  selectAnswer(questions: Questions, answers: Answers) {
    questions.answers.forEach((a) => {
      if (a.id !== answers.id) {
        a.selected = false;
      }
    });
  }

  checkAnswer(questions: Questions) {
    return questions.answers.every(a => a.selected === a.correct) ? 'correct' : 'incorrect';
  }

  goBack() {
    this.section = 'start';
  }

  submitTrivia() {
    let final = [];
    this.quiz.questions.forEach(f => final.push({
      'Quiz ID': this.quiz.id,
      'Question ID': f.id,
      'Answered': f.answered
    }))
    this.section = 'end';
  }

}
