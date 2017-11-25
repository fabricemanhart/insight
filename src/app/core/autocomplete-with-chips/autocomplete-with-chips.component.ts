import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { JobProfileFilter } from '../../employees/employees-filter/job-profile-filter';
import { Option } from './../models/option';

@Component({
  selector: 'app-autocomplete-with-chips',
  templateUrl: './autocomplete-with-chips.component.html',
  styleUrls: ['./autocomplete-with-chips.component.scss']
})
export class AutocompleteWithChipsComponent implements OnInit {
  control: FormControl = new FormControl();
  filteredOptions$: Observable<Array<Option>>;

  @Input('filter') filter: JobProfileFilter;

  ngOnInit() {
    this.filteredOptions$ = this.control.valueChanges
      .startWith(null)
      .map(
        option => (option && typeof option === 'object' ? option.name : option)
      )
      .map(
        name => (name ? this.filterDropdown(name) : this.filter.options.slice())
      );
  }

  filterDropdown(val: string): Option[] {
    if (!this.filter.options) {
      return [];
    }

    return this.filter.options.filter(
      option => option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  display(option: Option): string | Option {
    return option ? option.name : option;
  }

  onSelectionChanged(option: Option) {
    if (this.filter.selectedOptions.indexOf(option) !== -1) {
      return;
    }

    this.filter.selectedOptions.push(option);
    this.filter.next();
  }

  onOptionRemoved(option: Option) {
    const index = this.filter.selectedOptions.indexOf(option);
    this.filter.selectedOptions.splice(index, 1);
    this.filter.next();
  }
}
