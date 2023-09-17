import { Component } from '@angular/core';
// import * as quizQuestions from '../../../assets/data/quiz-questions.json';
import * as quizData from '../../../assets/data/quiz-questions.json';
const quizQuestions: any = (quizData as any).default;


@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.scss'],
})
export class QuizAppComponent {
  correctAnswer = false;
  incorrectAnswer = false;

  title = 'Quiz-App';
  score = 0;
  userAnswer: string = '';

  questions = quizQuestions;

  // questions = [
  //   {
  //     question: 'Welcher Planet ist der größte im Sonnensystem?',
  //     options: ['Jupiter', 'Mars', 'Erde', 'Venus'],
  //     answer: 'Jupiter',
  //   },
  //   {
  //     question: 'Was ist die Quadratwurzel von 144?',
  //     options: ['12', '14', '16', '18'],
  //     answer: '12',
  //   },
  //   {
  //     question: 'In welchem Jahr fiel die Berliner Mauer?',
  //     options: ['1989', '1990', '1991', '1992'],
  //     answer: '1989',
  //   },
  // ];

  currentQuestionIndex = 0;

  loadNextQuestion() {
    this.currentQuestionIndex++;
    this.userAnswer = '';
  }

  checkAnswer(userAnswer: string) {
    if (userAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswer = true;
      this.incorrectAnswer = false;
      this.score++;
    } else {
      this.correctAnswer = false;
      this.incorrectAnswer = true;
    }

    this.loadNextQuestion();

    setTimeout(() => {
      this.correctAnswer = false;
      this.incorrectAnswer = false;
    }, 2500);
  }

  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswer = '';
  }

  endQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswer = '';
  }
}
