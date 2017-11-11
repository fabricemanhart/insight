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

  sidenavItems: SidenavItem[];
  currentlyOpen: SidenavItem[];

  constructor() { }

  ngOnInit() {
    this.sidenavItems = [new SidenavItem({ name: 'Fabrice'})];
    this.currentlyOpen = [new SidenavItem({ name: 'Fabrice'})];
    console.log(this.sidenavItems);
    // this.sidenavItems$ = this.store.select(fromRoot.getSidenavItems);
    // this.currentlyOpen$ = this.store.select(fromRoot.getSidenavCurrentlyOpen);
  }

  toggleSidenavCollapse() {
    this.toggledSidenavCollapse.emit();
  }

}
