import { Component, Input, OnInit } from '@angular/core';
import { selector } from 'rxjs/operator/publish';

import { EmployeeSkill } from '../../../../shared/models/employee-skill';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  @Input('level') level: number;
  @Input('allSkills') allSkills: Array<EmployeeSkill>;

  private skillsFiltered: Array<EmployeeSkill>;
  hasLimit = true;

  ngOnInit() {
    this.skillsFiltered = this.allSkills
      .filter(s => s.Experience === this.level)
      .sort(this.compareByIsCapability)
      .sort(this.compareByExperiencePoints);

      this.hasLimit = this.skillsFiltered.length > 10;
  }

  get skills() {
    if (this.hasLimit) {
      return this.skillsFiltered.slice(0, 10);
    }
    return this.skillsFiltered;
  }

  setNoLimitForSkills() {
    this.hasLimit = false;
  }

  calculateSkillFontSize(skill: EmployeeSkill): number {
    return Math.max(Math.min(28, skill.ExperiencePoints / 4), 12);
  }

  private compareByExperiencePoints(a: EmployeeSkill, b: EmployeeSkill) {
    if (a.ExperiencePoints > b.ExperiencePoints) {
      return -1;
    }
    if (a.ExperiencePoints < b.ExperiencePoints) {
      return 1;
    }
    return 0;
  }

  private compareByIsCapability(a: EmployeeSkill, b: EmployeeSkill) {
    if (a.IsCapability && !b.IsCapability) {
      return -1;
    }
    if (!a.IsCapability && b.IsCapability) {
      return 1;
    }
    return 0;
  }
}
