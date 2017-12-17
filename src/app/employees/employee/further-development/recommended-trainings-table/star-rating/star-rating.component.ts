import { forEach } from '@angular/router/src/utils/collection';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input('rating') rating: number;
  stars: Array<Star>;

  ngOnInit() {
    const ratingRoundedUp = Math.ceil(this.rating);
    this.stars = new Array<Star>(5).fill(undefined).map(x => new Star());
    for (let i = 0; i <= ratingRoundedUp - 1; i++) {
      this.stars[i].isFilled = true;
    }
  }
}

export class Star {
  isFilled: boolean;
}
