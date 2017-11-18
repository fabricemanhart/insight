import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import { ScrollbarComponent } from '../scrollbar/scrollbar.component';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit, OnDestroy {

  scrollbar: Scrollbar;

  sidenavOpen = true;
  sidenavCollapsed = true;
  sidenavAlign = 'start';
  sidenavMode = 'side';
  sidenavDisableClose = true;

  @ViewChild('scrollContainer')
  scrollContainer: ScrollbarComponent;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.scrollbar = Scrollbar.get(this.scrollContainer.element.nativeElement);
  }

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

  onActivate(): void {
    if (this.scrollbar) {
      this.scrollbar.setPosition(0, 0);
    } else if (this.scrollContainer && this.scrollContainer.element) {
      this.scrollbar = Scrollbar.get(this.scrollContainer.element.nativeElement);
      this.scrollbar.setPosition(0, 0);
    }
  }

  ngOnDestroy() {
  }
}
