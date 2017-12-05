import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ShortProfile } from '../../../core/models/shortProfile';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  url: string;

  shortProfiles$: Observable<Array<ShortProfile>>;

  constructor(private dataService: DataService, route: ActivatedRoute) {

    this.url = 'http://localhost:41588/api/v1/employees/' +
    route.snapshot.paramMap.get('code') +
    '/shortprofiles';

    this.shortProfiles$ = dataService.getAll<Array<ShortProfile>>(this.url);
  }

  ngOnInit() {}
}
