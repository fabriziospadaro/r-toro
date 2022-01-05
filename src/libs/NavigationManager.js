export default class NavigationManager {
  static setNavigation = null;

  static nagivateTo(page) {
    this.setNavigation(page);
  }
  static initialize(setNav) {
    this.setNavigation = setNav;
  }
}