import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceIndicatorComponent } from './experience-indicator.component';

describe('ExperienceIndicatorComponent', () => {
  let component: ExperienceIndicatorComponent;
  let fixture: ComponentFixture<ExperienceIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
