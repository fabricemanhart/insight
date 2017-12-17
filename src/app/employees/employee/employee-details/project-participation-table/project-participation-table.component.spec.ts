import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectParticipationTableComponent } from './project-participation-table.component';

describe('ProjectTableComponent', () => {
  let component: ProjectParticipationTableComponent;
  let fixture: ComponentFixture<ProjectParticipationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectParticipationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectParticipationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
