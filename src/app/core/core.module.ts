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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{ path: '', component: LayoutComponent}]),
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
    SidenavCollapseDirective],
    exports: [
      LayoutComponent]
})
export class CoreModule { }
