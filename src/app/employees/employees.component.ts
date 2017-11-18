import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewInit {

  @ViewChild('sticky') sticky: ElementRef;

  employees: Employee[];

  tableHover = true;
  tableStriped = true;
  tableCondensed = true;
  tableBordered = true;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient
      .get<Employee[]>('http://localhost:41588/api/v1/employees')
      .subscribe(response => this.employees = response.slice(0,10))
  }

  ngAfterViewInit() {
    const scrollbar = Scrollbar.get(document.getElementById('main-scrollbar'));
    const marginTop = 60 + 98;
    const scrollHeight = scrollbar.targets.content.clientHeight - marginTop;

    scrollbar.addListener(({ offset }) => {
      const distance = offset.y;

      if (distance >= marginTop) {
        if (distance > scrollHeight) {
          this.sticky.nativeElement.style.top = scrollHeight - marginTop + 'px';
        } else {
          this.sticky.nativeElement.style.top = distance - marginTop + 'px';
        }
      } else {
        this.sticky.nativeElement.style.top = '0px';
      }
    });
  }
}
