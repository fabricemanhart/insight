import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-indicator',
  templateUrl: './experience-indicator.component.html',
  styleUrls: ['./experience-indicator.component.scss']
})
export class ExperienceIndicatorComponent {
  @Input('level') level: number;

  constructor() {}

  getTitle() {
    if (this.level > 3) {
      return 'Expert';
    }

    if (this.level > 1) {
      return 'Proficient';
    }

    if (this.level > 0) {
      return 'Beginner';
    }
    return 'Novice';
  }
}
