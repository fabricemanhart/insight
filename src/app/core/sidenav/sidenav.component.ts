import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { SidenavItem } from './sidenav-item/sidenav-item.model';
import { Observable } from 'rxjs/Observable';
import { sideNavItems } from '../../constants/sideNav';

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
    this.sidenavItems = sideNavItems;
    this.currentlyOpen = [new SidenavItem({ name: 'Fabrice'})];
  }

  toggleSidenavCollapse() {
    this.toggledSidenavCollapse.emit();
  }
}
