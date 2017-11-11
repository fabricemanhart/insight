import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarUserMenuComponent } from './toolbar-user-menu.component';

describe('ToolbarUserMenuComponent', () => {
  let component: ToolbarUserMenuComponent;
  let fixture: ComponentFixture<ToolbarUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
