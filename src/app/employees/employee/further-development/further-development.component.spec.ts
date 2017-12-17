import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherDevelopmentComponent } from './further-development.component';

describe('FurtherDevelopmentComponent', () => {
  let component: FurtherDevelopmentComponent;
  let fixture: ComponentFixture<FurtherDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurtherDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurtherDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
