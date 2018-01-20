import { DataService } from './../services/data.service';
import { FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { routing } from '../../constants/routing';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private dataService: DataService) {}

  @Input() sidenavCollapsed: boolean;
  @Output() toggledSidenav = new EventEmitter();
  control: FormControl = new FormControl();
  url = `${routing.apiHost}api/v1/search?term=`;
  searchResults$: Observable<Array<SearchResultGroup>>;

  ngOnInit() {
    this.searchResults$ = this.control.valueChanges
      .debounceTime(500)
      .startWith('')
      .switchMap(term =>
        this.dataService.getAll<Array<SearchResultGroup>>(this.url + term)
      );
  }

  toggleSidenav() {
    this.toggledSidenav.emit();
  }
}
