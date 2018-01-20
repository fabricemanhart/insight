import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routing } from '../../../constants/routing';
import { DataService } from '../../../core/services/data.service';
import { Training } from '../../../shared/models/training';

@Component({
  selector: 'app-further-development',
  templateUrl: './further-development.component.html',
  styleUrls: ['./further-development.component.scss']
})
export class FurtherDevelopmentComponent {
  url: string;
  code: string;
  trainings: Array<Training>;

  constructor(private dataService: DataService, route: ActivatedRoute) {
    route.paramMap.subscribe(p => {
      this.code = p.get('code');
      this.url = `${routing.apiHost}api/v1/employees/${this.code}`;
      return [];
    });
  }
}
