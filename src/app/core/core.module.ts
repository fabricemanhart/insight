import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatRippleModule,
    MatSidenavModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeComponent } from './../employees/employee/employee.component';
import { AutocompleteWithChipsComponent } from './autocomplete-with-chips/autocomplete-with-chips.component';
import { LayoutComponent } from './layout/layout.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { DataService } from './services/data.service';
import { SidenavCollapseDirective } from './sidenav/sidenav-collapse.directive';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarUserMenuComponent } from './toolbar/toolbar-user-menu/toolbar-user-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ClickOutsideDirective } from './utils/click-outside.directive';
import { WinAuthInterceptor } from './WinAuthInterceptor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: LayoutComponent},
      { path: 'employee', component: EmployeeComponent},
      { path: 'employees', component: EmployeesComponent}
    ]),
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    SidenavComponent,
    ToolbarComponent,
    SidenavItemComponent,
    ScrollbarComponent,
    SidenavCollapseDirective,
    ClickOutsideDirective,
    ToolbarUserMenuComponent,
    PageHeaderComponent,
    AutocompleteWithChipsComponent],
    exports: [
      LayoutComponent,
      PageHeaderComponent,
      AutocompleteWithChipsComponent
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: WinAuthInterceptor,
        multi: true
      },
      DataService
    ]
})
export class CoreModule { }
