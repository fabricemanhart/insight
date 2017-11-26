import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Option } from './../models/option';

@Component({
  selector: 'app-autocomplete-with-chips',
  templateUrl: './autocomplete-with-chips.component.html',
  styleUrls: ['./autocomplete-with-chips.component.scss']
})
export class AutocompleteWithChipsComponent implements OnInit {
  control: FormControl = new FormControl();
  filteredOptions$: Observable<Array<Option>>;

  @Input('filter') filter: any;

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

  onSelectionChanged(option: Option, event) {
    // bug https://github.com/angular/material2/issues/4094
    if (
      this.filter.selectedOptions.indexOf(option) !== -1 ||
      event.source.selected === false
    ) {
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
