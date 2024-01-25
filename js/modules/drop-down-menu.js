import clickOutSide from './outside-click.js';

export default class DropDown {
  constructor(subMenus, events) {
    this.subMenus = document.querySelectorAll(subMenus);
    this.mostraDropdown = this.mostraDropdown.bind(this);
    this.activeClass = 'ativo';
    // define os argumentos e substitui por um padrão
    // se for undefined
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
  }
  // ativa o drowpdown e adiciona a função
  // que verifica se clicou fora

  mostraDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    clickOutSide(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona o evento

  addDropDownMenusEvent() {
    this.subMenus.forEach((subMenu) => {
      this.events.forEach((userEvent) => {
        subMenu.addEventListener(userEvent, this.mostraDropdown);
      });
    });
  }

  init() {
    if (this.subMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
