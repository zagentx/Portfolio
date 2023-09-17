import { Component } from '@angular/core';
// import questions from '../../../assets/data/quiz-questions.json';

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.scss'],
})
export class QuizAppComponent {
  // Variablen als Boolesche Flags definiert
  correctAnswer = false;
  incorrectAnswer = false;

  title = 'Quiz-App';
  score = 0;
  userAnswer: string = '';

  questions = [
    {
      question: 'Welcher Planet ist der größte im Sonnensystem?',
      options: ['Jupiter', 'Mars', 'Erde', 'Venus'],
      answer: 'Jupiter',
    },
    {
      question: 'Was ist die Quadratwurzel von 144?',
      options: ['12', '14', '16', '18'],
      answer: '12',
    },
    {
      question: 'In welchem Jahr fiel die Berliner Mauer?',
      options: ['1989', '1990', '1991', '1992'],
      answer: '1989',
    },
  ];

  currentQuestionIndex = 0;

  // Methode hinzugefügt, um die nächste Frage im Quiz zu laden
  loadNextQuestion() {
    this.currentQuestionIndex++;
    this.userAnswer = '';
  }

  // Methode checkAnswer() angepasst
  checkAnswer(userAnswer: string) {
    if (userAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswer = true;
      this.incorrectAnswer = false;
      this.score++;

      // Meldung anzeigen, dass die Antwort richtig war
      alert('Antwort richtig!');
    } else {
      this.correctAnswer = false;
      this.incorrectAnswer = true;

      // Meldung anzeigen, dass die Antwort falsch war
      alert(
        'Antwort falsch! Die richtige Antwort ist: ' +
          this.questions[this.currentQuestionIndex].answer,
      );
    }

    // Methode loadNextQuestion() aufgerufen, wenn die Antwort richtig oder falsch ist
    this.loadNextQuestion();

    // Methode setTimeout() verwendet, um die Variablen correctAnswer und incorrectAnswer nach einer bestimmten Zeit auf false zu setzen
    setTimeout(() => {
      this.correctAnswer = false;
      this.incorrectAnswer = false;
    }, 1000);
  }

  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswer = '';
  }

  // Funktion zum Beenden des Quiz
  endQuiz() {
    // Quiz-Status zurücksetzen
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswer = '';

    // Meldung anzeigen
    alert('Quiz beendet!');
  }
}
