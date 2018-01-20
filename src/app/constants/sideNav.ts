import { SidenavItem } from '../core/sidenav/sidenav-item/sidenav-item.model';

export const sideNavItems = [
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
