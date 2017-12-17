import 'rxjs/add/operator/switchMap';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { ProjectParticipation } from '../../../../core/models/project-participation';
import { ProjectRow } from '../../../../core/models/project-row';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-project-participation-table',
  templateUrl: './project-participation-table.component.html',
  styleUrls: ['./project-participation-table.component.scss']
})
export class ProjectParticipationTableComponent implements OnInit {
  displayedColumns = [
    'priority',
    'projectCode',
    'projectName',
    'phaseCode',
    'phaseStateText',
    'function',
    'percentageEffective',
    'days',
    'fromPlanned',
    'toPlanned',
    'projectManagerCode',
    'engagementManagerCode',
    'staffingManagerCode',
    'businessDeveloperCode',
    'hourlyRate'
  ];
  dataSource: MatTableDataSource<ProjectRow>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap(p => {
        const url =
          'http://localhost:41588/api/v1/employees/' +
          p.get('code') +
          '/projects/current';
        return this.dataService.getAll<Array<ProjectParticipation>>(url);
      })
      .subscribe(p => {
        const projectRows = p.map(r => new ProjectRow(r));

        this.dataSource = new MatTableDataSource(projectRows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

// example taken from angular docs [https://material.angular.io/components/table/examples]
