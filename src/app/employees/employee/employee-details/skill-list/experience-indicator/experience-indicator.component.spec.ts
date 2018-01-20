import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceIndicatorComponent } from './experience-indicator.component';

describe('Given a level of 4, when calling the getTitle function', () => {
  const component = new ExperienceIndicatorComponent();
  component.level = 4;

  it('should return "Expert"', () => {
    const title = component.getTitle();
    expect(title).toEqual('Expert');
  });
});

describe('Given a level of 3, when calling the getTitle function', () => {
  const component = new ExperienceIndicatorComponent();
  component.level = 3;

  it('should return "Proficient"', () => {
    const title = component.getTitle();
    expect(title).toEqual('Proficient');
  });
});

describe('Given a level of 0.5, when calling the getTitle function', () => {
  const component = new ExperienceIndicatorComponent();
  component.level = 0.5;

  it('should return "Beginner"', () => {
    const title = component.getTitle();
    expect(title).toEqual('Beginner');
  });
});

describe('Given a level of 0, when calling the getTitle function', () => {
  const component = new ExperienceIndicatorComponent();
  component.level = 0;

  it('should return "Novice"', () => {
    const title = component.getTitle();
    expect(title).toEqual('Novice');
  });
});
