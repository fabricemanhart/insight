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

  @ViewChild('scrollContainer')
  scrollContainer: ScrollbarComponent;

  private _mediaSubscription: Subscription;
  private _routerEventsSubscription: Subscription;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.scrollbar = Scrollbar.get(this.scrollContainer.element.nativeElement);
  }

  openSidenav() {

  }

  closeSidenav() {

  }

  toggleSidenav() {

  }

  toggleSidenavCollapse() {

  }

  setSidenavMode(mode: string) {

  }

  setSidenavDisableClose(value: boolean) {

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
    this._mediaSubscription.unsubscribe();
    this._routerEventsSubscription.unsubscribe();
  }
}
