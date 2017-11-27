import { ActivatedRoute } from '@angular/router';

import { Skill } from '../../core/models/skill';
import { DataService } from '../../core/services/data.service';
import { FilterLazy } from './filter-lazy';

export class SkillFilter extends FilterLazy<Skill> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      'http://localhost:41588/api/v1/skills/search/',
      'http://localhost:41588/api/v1/skills/',
      'assets',
      'Skills'
    );
  }
}
