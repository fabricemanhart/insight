import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  sidenavOpen = true;
  sidenavCollapsed = true;
  sidenavAlign = 'start';
  sidenavMode = 'side';
  sidenavDisableClose = true;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }


  openSidenav() {
    this.sidenavOpen = true;
  }

  closeSidenav() {
    this.sidenavOpen = false;
  }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  toggleSidenavCollapse() {
    this.sidenavCollapsed = !this.sidenavCollapsed;

  }
}
