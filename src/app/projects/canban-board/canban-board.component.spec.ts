import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanbanBoardComponent } from './canban-board.component';

describe('CanbanBoardComponent', () => {
  let component: CanbanBoardComponent;
  let fixture: ComponentFixture<CanbanBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanbanBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanbanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
