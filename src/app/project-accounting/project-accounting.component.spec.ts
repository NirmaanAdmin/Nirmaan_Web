import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAccountingComponent } from './project-accounting.component';

describe('ProjectAccountingComponent', () => {
  let component: ProjectAccountingComponent;
  let fixture: ComponentFixture<ProjectAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAccountingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
