import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFilterPanelComponent } from './employees-filter-panel.component';

describe('EmployeesFilterComponent', () => {
  let component: EmployeesFilterPanelComponent;
  let fixture: ComponentFixture<EmployeesFilterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesFilterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
