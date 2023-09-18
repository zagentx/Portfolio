import { Component } from '@angular/core';
import * as quizQuestions from '../../../assets/data/quiz-questions.json';

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

    setTimeout(() => {
      this.correctAnswer = false;
      this.incorrectAnswer = false;
      this.loadNextQuestion();
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
