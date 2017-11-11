import { Component, Input } from '@angular/core';
import { SidenavItem } from './sidenav-item.model';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent {

  scrollbar: any;

  @Input('item') item: SidenavItem;
  @Input('currentlyOpen') currentlyOpen: SidenavItem[] = [];

  constructor() { }

  isOpen(item: SidenavItem) {
    return this.currentlyOpen.indexOf(item) > -1;
  }
}
