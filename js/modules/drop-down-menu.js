import clickOutSide from './outside-click.js';

export default function initDropDown() {
  const subMenus = document.querySelectorAll('[data-dropdown]');

  function mostraDropdown(event) {
    event.preventDefault();
    this.classList.add('ativo');
    clickOutSide(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }
  subMenus.forEach((subMenu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      subMenu.addEventListener(userEvent, mostraDropdown);
    });
  });
}
