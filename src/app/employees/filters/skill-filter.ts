import { ActivatedRoute } from '@angular/router';

import { routing } from '../../constants/routing';
import { DataService } from '../../core/services/data.service';
import { Skill } from '../../shared/models/skill';
import { FilterLazy } from './filter-lazy';

export class SkillFilter extends FilterLazy<Skill> {
  constructor(dataService: DataService, route: ActivatedRoute) {
    super(
      dataService,
      route,
      `${routing.apiHost}api/v1/skills/search/`,
      `${routing.apiHost}api/v1/skills/`,
      'assets',
      'Skills'
    );
  }
}
