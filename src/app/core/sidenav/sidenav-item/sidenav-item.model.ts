export class SidenavItem {
  name: string;
  icon: string;
  route: any;
  position: number;
  badge: string;
  badgeColor: string;
  customClass: string;
  routerLinkActiveOptions: any;

  constructor(model: any = null) {
    if (model) {
      this.name = model.name;
      this.icon = model.icon;
      this.route = model.route;
      this.position = model.position;
      this.badge = model.badge;
      this.badgeColor = model.badgeColor;
      this.customClass = model.customClass;
      this.routerLinkActiveOptions = model.routerLinkActiveOptions ? model.routerLinkActiveOptions : { exact: false };
    }
  }

  routeIsFunction() {
    return this.route instanceof Function || typeof this.route === 'function';
  }

  generateLetterIcon() {
    const words = this.name.split(' ');

    if (words.length > 1) {
      return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toLowerCase();
    } else {
      return this.name.charAt(0).toUpperCase() + this.name.charAt(1).toLowerCase();
    }
  }
}
