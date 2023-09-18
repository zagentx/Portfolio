import { Component, Input } from '@angular/core';
import * as gkQuizQuestions from '../../../assets/data/quiz-questions/gk-quiz-questions.json';
import * as csQuizQuestions from '../../../assets/data/quiz-questions/cs-quiz-questions.json';
import * as movieQuizQuestions from '../../../assets/data/quiz-questions/movie-quiz-questions.json';

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

  quizTopics = ['Allgemeinwissen', 'Computertechnik', 'Film & Fernsehen'];

  private _selectedQuizTopic = this.quizTopics[0];

  questions = this.getQuestions();

  currentQuestionIndex = 0;

  getQuestions() {
    switch (this.selectedQuizTopic) {
      case 'Allgemeinwissen':
        return gkQuizQuestions;
      case 'Computertechnik':
        return csQuizQuestions;
      case 'Film & Fernsehen':
        return movieQuizQuestions;
      default:
        return gkQuizQuestions;
    }
  }

  get selectedQuizTopic() {
    return this._selectedQuizTopic;
  }

  set selectedQuizTopic(value) {
    this._selectedQuizTopic = value;
    this.questions = this.getQuestions();
  }

  loadNextQuestion() {
    this.currentQuestionIndex++;
    this.userAnswer = '';
    this.questions = this.getQuestions();
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
    }, 2000);
  }

  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswer = '';
    this.questions = this.getQuestions();
  }

  endQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.userAnswer = '';
    this.questions = this.getQuestions();
  }
}
