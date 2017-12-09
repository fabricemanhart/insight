import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { ProjectParticipation } from '../../../../core/models/project-participation';
import { DataService } from '../../../../core/services/data.service';
import { ProjectRow } from '../../../../core/models/projectRow';

@Component({
  selector: 'app-project-participation-table',
  templateUrl: './project-participation-table.component.html',
  styleUrls: ['./project-participation-table.component.scss']
})
export class ProjectTableComponent implements AfterViewInit, OnInit {
  @Input('code') code: string;

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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const url =
      'http://localhost:41588/api/v1/employees/' +
      this.code +
      '/projects/current';
    this.dataService.getAll<Array<ProjectParticipation>>(url).subscribe(p => {

      const projectRows = p.map(r => new ProjectRow(r));

      this.dataSource = new MatTableDataSource(projectRows);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

// example taken from angular docs [https://material.angular.io/components/table/examples]
