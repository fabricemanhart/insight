import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './../employees/employee/employee.component';
import { RouterModule } from '@angular/router';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { MdButtonModule, MdIconModule, MdRippleModule, MdSidenavModule } from '@angular/material';
import { SidenavCollapseDirective } from './sidenav/sidenav-collapse.directive';
import { ToolbarUserMenuComponent } from './toolbar/toolbar-user-menu/toolbar-user-menu.component';
import { ClickOutsideDirective } from './utils/click-outside.directive';
import { EmployeesComponent } from '../employees/employees.component';
import { PageHeaderComponent } from './page-header/page-header.component';
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
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdSidenavModule
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
    PageHeaderComponent],
    exports: [
      LayoutComponent,
      PageHeaderComponent
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: WinAuthInterceptor,
        multi: true
      },
    ]
})
export class CoreModule { }
