import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Option } from '../models/option';

@Component({
  selector: 'app-autocomplete-with-chips',
  templateUrl: './autocomplete-with-chips.component.html',
  styleUrls: ['./autocomplete-with-chips.component.scss']
})
export class AutocompleteWithChipsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  myControl: FormControl = new FormControl();
  filteredOptions$: Observable<Array<Option>>;

  @Input('options') options: Array<Option>;

  ngOnInit() {
    console.log(this.options);
    this.filteredOptions$ = this.myControl.valueChanges
    .startWith(null)
    .map(option => { console.log(option); return option && typeof option === 'object' ? option.name : option; })
    .map(name => name ? this.filter(name) : this.options.slice());
  }

  filter(val: string): Option[] {
    console.log('filter ' + val);
    if (!this.options) {
      return [];
    }

    return this.options.filter(
      option => option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  displayFn(option: Option): string | Option {
    return option ? option.name : option;
  }
}
