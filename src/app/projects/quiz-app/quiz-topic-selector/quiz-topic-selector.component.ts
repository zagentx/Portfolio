import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quiz-topic-selector',
  templateUrl: './quiz-topic-selector.component.html',
  styleUrls: ['./quiz-topic-selector.component.scss'],
})
export class QuizTopicSelectorComponent {
  @Input() selectedTopic: string | undefined;
  @Output() selectedTopicChange = new EventEmitter<string>();
  @ViewChild('carousel') carousel: NgbCarousel | any;

  quizTopics = ['Allgemeinwissen', 'Computertechnik', 'Film & Fernsehen'];

  constructor() {}

  ngOnChanges() {
    this.selectedTopicChange.emit(this.selectedTopic);
  }

  changeSlide() {
    this.carousel.select(this.selectedTopic);
  }
}
