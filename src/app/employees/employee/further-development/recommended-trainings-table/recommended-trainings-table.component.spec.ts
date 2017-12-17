import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedTrainingsTableComponent } from './recommended-trainings-table.component';

describe('RecommendedTrainingsTableComponent', () => {
  let component: RecommendedTrainingsTableComponent;
  let fixture: ComponentFixture<RecommendedTrainingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedTrainingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedTrainingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
