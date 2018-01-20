import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingComponent } from './star-rating.component';

describe('Given a rating of 3.2', () => {
  const component = new StarRatingComponent();
  component.rating = 3.2;

  it('should produce 4 stars', () => {
    component.ngOnInit();
    expect(component.stars.length).toEqual(5);
    expect(component.stars[0].isFilled).toBeTruthy();
    expect(component.stars[1].isFilled).toBeTruthy();
    expect(component.stars[2].isFilled).toBeTruthy();
    expect(component.stars[3].isFilled).toBeTruthy();
    expect(component.stars[4].isFilled).toBeFalsy();
  });
});
