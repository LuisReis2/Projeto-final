import clickOutSide from './outside-click.js';

export default function initMenuMobile() {}
const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const eventos = ['touchstart', 'click'];
if (menuButton) {
  function openMenu() {
    menuButton.classList.add('ativo');
    menuList.classList.add('ativo');
    clickOutSide(menuList, eventos, () => {
      menuButton.classList.remove('ativo');
      menuList.classList.remove('ativo');
    });
  }

  eventos.forEach((userEvent) => {
    menuButton.addEventListener(userEvent, openMenu);
  });
}
