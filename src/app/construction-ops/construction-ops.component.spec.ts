import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionOpsComponent } from './construction-ops.component';

describe('ConstructionOpsComponent', () => {
  let component: ConstructionOpsComponent;
  let fixture: ComponentFixture<ConstructionOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
