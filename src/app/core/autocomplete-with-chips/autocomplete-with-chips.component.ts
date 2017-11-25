import { Option } from './../models/option';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


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
  selectedOptions: Array<Option> = [];

  @Input('options') options: Array<Option>;

  @Output('selectionChange')
  selectionChange = new EventEmitter<Array<Option>>();

  ngOnInit() {
    this.filteredOptions$ = this.myControl.valueChanges
    .startWith(null)
    .map(option => option && typeof option === 'object' ? option.name : option)
    .map(name => name ? this.filter(name) : this.options.slice());
  }

  filter(val: string): Option[] {
    if (!this.options) {
      return [];
    }

    return this.options.filter(
      option => option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  display(option: Option): string | Option {
    return option ? option.name : option;
  }

  onSelectionChanged(option: Option) {

    console.log(option);
    console.log(this.selectedOptions);
    
    if (this.selectedOptions.indexOf(option) !== -1) {
      return;
    }

    this.selectedOptions.push(option);
    this.selectionChange.next(this.selectedOptions);
  }

  onOptionRemoved(option: Option) {
    const index = this.selectedOptions.indexOf(option);
    this.selectedOptions.splice(index, 1);
    this.selectionChange.next(this.selectedOptions);
  }
}
