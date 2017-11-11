import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { SidenavItem } from './sidenav-item/sidenav-item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input('collapsed') collapsed: boolean;
  @Output('toggledSidenavCollapse') toggledSidenavCollapse = new EventEmitter();

  sidenavItems$: Observable<SidenavItem[]>;
  currentlyOpen$: Observable<SidenavItem[]>;

  constructor() { }

  ngOnInit() {
    // this.sidenavItems$ = this.store.select(fromRoot.getSidenavItems);
    // this.currentlyOpen$ = this.store.select(fromRoot.getSidenavCurrentlyOpen);
  }

  toggleSidenavCollapse() {
    this.toggledSidenavCollapse.emit();
  }

}
