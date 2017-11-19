import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteWithChipsComponent } from './autocomplete-with-chips.component';

describe('AutocompleteWithChipsComponent', () => {
  let component: AutocompleteWithChipsComponent;
  let fixture: ComponentFixture<AutocompleteWithChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteWithChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteWithChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
