import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSidenavCollapse]'
})
export class SidenavCollapseDirective {

  @HostBinding('class.sidenav-collapsed')
  @Input('appSidenavCollapse')
  appSidenavCollapse = true;

  @HostBinding('class.open')
  open: boolean;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.appSidenavCollapse) {
      this.open = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.appSidenavCollapse) {
      this.open = false;
    }
  }

  constructor() { }
}
