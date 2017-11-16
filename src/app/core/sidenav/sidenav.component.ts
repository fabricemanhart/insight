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
    this.sidenavItems = sideNavItems;
    this.currentlyOpen = [new SidenavItem({ name: 'Fabrice'})];
  }

  toggleSidenavCollapse() {
    this.toggledSidenavCollapse.emit();
  }
}

const sideNavItems = [
  new SidenavItem({
    name: 'Employees',
    route: '/employees',
    icon: 'person',
    subItems: [ ],
    position: 1
  }),
  new SidenavItem({
    name: 'Groups',
    route: '/tables/table-pagination',
    icon: 'group',
    subItems: [ ],
    position: 1
  }),
  new SidenavItem({
    name: 'Trainings',
    route: '/tables/simple-table',
    icon: 'web',
    subItems: [ ],
    position: 1
  }),
  new SidenavItem({
    name: 'Projects',
    route: '/tables/simple-table',
    icon: 'web',
    subItems: [ ],
    position: 1
  }),
  new SidenavItem({
    name: 'Capabilities',
    route: '/tables/simple-table',
    icon: 'web',
    subItems: [ ],
    position: 1
  })
];
