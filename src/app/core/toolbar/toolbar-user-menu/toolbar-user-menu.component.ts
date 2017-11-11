import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-user-menu',
  templateUrl: './toolbar-user-menu.component.html',
  styleUrls: ['./toolbar-user-menu.component.scss']
})
export class ToolbarUserMenuComponent {

  isOpen: boolean;

    constructor() { }

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }

    onClickOutside() {
      this.isOpen = false;
    }
}
