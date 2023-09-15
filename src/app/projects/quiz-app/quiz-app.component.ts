import { Component } from '@angular/core';
import * as questionsData from '../../../assets/Data/quiz-questions.json';

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
  questions = [
    {
      question: 'Was ist die Hauptstadt von Deutschland?',
      options: ['Berlin', 'München', 'Hamburg', 'Köln'],
      answer: 'Berlin',
    },
    {
      question: 'Wer hat die Relativitätstheorie formuliert?',
      options: ['Newton', 'Einstein', 'Galileo', 'Kepler'],
      answer: 'Einstein',
    },
    // Fügen Sie hier weitere Fragen hinzu...
  ];
  currentQuestionIndex = 0;

  checkAnswer(userAnswer: string) {
    if (userAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswer = true;

      this.score++;
    }
    if (userAnswer !== this.questions[this.currentQuestionIndex].answer) {
      this.incorrectAnswer = true;
    }
    this.currentQuestionIndex++;
  }

  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswer = '';
  }
}
