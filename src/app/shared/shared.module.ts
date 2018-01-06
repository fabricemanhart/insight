import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { AutocompleteWithChipsComponent } from './autocomplete-with-chips/autocomplete-with-chips.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AutocompleteWithChipsComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
    AutocompleteWithChipsComponent
  ]
})
export class SharedModule { }
