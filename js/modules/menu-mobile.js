import clickOutSide from './outside-click.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector('[data-menu="button"]');
    this.menuList = document.querySelector('[data-menu="list"]');
    this.activeClass = 'ativo';

    // atribui os eventos

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }
  // adiciona  o menu e atribui o clique fora para fechar

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    clickOutSide(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }
  // adiciona os eventos no menu

  addEventListener() {
    this.events.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    if (this.menuButton) {
      this.addEventListener();
    }
    return this;
  }
}
