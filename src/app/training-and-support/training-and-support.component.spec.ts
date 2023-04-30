import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAndSupportComponent } from './training-and-support.component';

describe('TrainingAndSupportComponent', () => {
  let component: TrainingAndSupportComponent;
  let fixture: ComponentFixture<TrainingAndSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingAndSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingAndSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
