import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Skill } from './../../core/models/skill';
import { FilterLazyBase } from './filter-lazy-base';
import { SkillService } from './skill.service';

@Injectable()
export class SkillFilterService extends FilterLazyBase<Skill> {
  constructor(private skillService: SkillService, route: ActivatedRoute) {
    super(route, 'assets', 'Skills', skillService);
  }
}
