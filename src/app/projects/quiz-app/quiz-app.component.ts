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

    {
      question: 'Welcher Planet ist der größte im Sonnensystem?',
      options: ['Mars', 'Venus', 'Saturn', 'Jupiter'],
      answer: 'Jupiter',
    },
    {
      question: "Wer ist der Autor von 'Faust'?",
      options: [
        'Friedrich Schiller',
        'Thomas Mann',
        'Hermann Hesse',
        'Johann Wolfgang von Goethe',
      ],
      answer: 'Johann Wolfgang von Goethe',
    },
    {
      question: 'Was ist die Quadratwurzel von 144?',
      options: ['10', '11', '12', '13'],
      answer: '12',
    },
    {
      question: 'In welchem Jahr fiel die Berliner Mauer?',
      options: ['1987', '1988', '1989', '1990'],
      answer: '1989',
    },
    {
      question: 'Wer hat das Telefon erfunden?',
      options: ['Nikola Tesla', 'Thomas Edison', 'Tony Stark'],
      answer: "Alexander Graham",
    },
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
