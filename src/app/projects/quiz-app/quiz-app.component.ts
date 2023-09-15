import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.scss'],
})
export class QuizAppComponent {
  title = 'Quiz-App';
  score = 0;
  questions = [
    { question: 'Was ist die Hauptstadt von Deutschland?', answer: 'Berlin' },
    {
      question: 'Wer hat die Relativitätstheorie formuliert?',
      answer: 'Einstein',
    },
    // Fügen Sie hier weitere Fragen hinzu...
  ];
  currentQuestionIndex = 0;

  checkAnswer(userAnswer: string) {
    if (userAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
}
