import 'rxjs/add/operator/switchMap';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { routing } from '../../../../constants/routing';
import { DataService } from '../../../../core/services/data.service';
import { Training } from '../../../../shared/models/training';
import { TrainingRow } from '../../../../shared/models/training-row';

@Component({
  selector: 'app-recommended-trainings-table',
  templateUrl: './recommended-trainings-table.component.html',
  styleUrls: ['./recommended-trainings-table.component.scss']
})
export class RecommendedTrainingsTableComponent implements OnInit {
  displayedColumns = ['picture', 'description', 'averageRating', 'action'];
  dataSource: MatTableDataSource<TrainingRow>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap(p => {
        const url = `${routing.apiHost}api/v1/employees/${p.get(
          'code'
        )}/trainings/recommended`;

        return this.dataService.getAll<Array<Training>>(url);
      })
      .subscribe(p => {
        const trainingRows = p.map(r => new TrainingRow(r));
        this.dataSource = new MatTableDataSource(trainingRows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getRecommendedTrainingImageUrl(id: string) {
    return `${routing.apiHost}api/v1/trainings/${id}/picture`;
  }
}
