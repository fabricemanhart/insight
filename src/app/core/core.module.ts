import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { PageHeaderComponent } from './page-header/page-header.component';
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
    SharedModule,
    RouterModule,
  ],
  declarations: [
    LayoutComponent,
    SidenavComponent,
    ToolbarComponent,
    SidenavItemComponent,
    SidenavCollapseDirective,
    ClickOutsideDirective,
    ToolbarUserMenuComponent,
    PageHeaderComponent
  ],
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
    DataService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
