import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';

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
  // if true, we going to the server to get the options list, else the list is preloaded
  @Input('lazyOptionsLoading') lazyOptionsLoading = false;

  ngOnInit() {
    this.filteredOptions$ = this.control.valueChanges
      .debounceTime(this.lazyOptionsLoading ? 500 : 0)
      .startWith(null)
      .mergeMap(
        val => (this.lazyOptionsLoading && val ? this.filter.search(val) : Observable.of(null)),
        (val, optionsFromSearch) => {
          if (this.lazyOptionsLoading && optionsFromSearch) {
            this.filter.options = optionsFromSearch;
          }
          return val;
        }
      )
      .map(
        option => (option && typeof option === 'object' ? option.name : option)
      )
      .map(
        name => (name && !this.lazyOptionsLoading ? this.filterDropdown(name) : this.filter.options.slice()));
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
      this.filter.selectedOptions.findIndex(o => o.id === option.id) !== -1 ||
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
