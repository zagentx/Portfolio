import { Component } from '@angular/core';
import * as questionsData from '../../../assets/data/quiz-questions.json';

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

    {
      question: 'Welcher Planet ist der größte im Sonnensystem?',
      options: ['Mars', 'Venus', 'Saturn', 'Jupiter'],
      answer: 'Jupiter',
    },
  ];
  currentQuestionIndex = 0;

  checkAnswer(userAnswer: string) {
    if (userAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswer = true;
      this.incorrectAnswer = false;
      this.score++;
    }
    if (userAnswer !== this.questions[this.currentQuestionIndex].answer) {
      this.incorrectAnswer = true;
      this.correctAnswer = false;
    }

    setTimeout(() => {
      this.correctAnswer = false;
      this.incorrectAnswer = false;
    }, 1000); // Setzt correctAnswer und incorrectAnswer nach 1 Sekunde (1000 Millisekunden) auf false

    this.currentQuestionIndex++;
  }

  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswer = '';
  }
}
