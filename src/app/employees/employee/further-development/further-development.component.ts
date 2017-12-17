import { Training } from '../../../core/models/training';
import { DataService } from '../../../core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ShortProfile } from '../../../core/models/shortProfile';
import { EmployeeSkill } from '../../../core/models/employee-skill';
import { Component, OnInit } from '@angular/core';

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
      this.url = 'http://localhost:41588/api/v1/employees/' + this.code;

      // dataService
      //   .getAll<Array<Training>>(this.url + '/trainings/recommended')
      //   .subscribe(res => (this.trainings = res));

      return [];
    });
  }
}
