import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageServiceComponent } from './local-storage-service.component';

describe('LocalStorageServiceComponent', () => {
  let component: LocalStorageServiceComponent;
  let fixture: ComponentFixture<LocalStorageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalStorageServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalStorageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
