import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTopicSelectorComponent } from './quiz-topic-selector.component';

describe('QuizSelectionComponent', () => {
  let component: QuizTopicSelectorComponent;
  let fixture: ComponentFixture<QuizTopicSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizTopicSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizTopicSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
