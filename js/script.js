import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-view.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropDown from './modules/drop-down-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHour from './modules/horario.js';
import fetchAnimais from './modules/fetch-animais.js';
import initBit from './modules/fetch-bitcoin.js';
import initAnimaScroll from './modules/anima-scroll.js';

const scrollsuave = new ScrollSuave('[data-tab="menunav"] a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion('[data-tab="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="content"] section', '[data-tab="menu"] li');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="container"]', '[data-modal="fechar"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();
initAnimaScroll();
initDropDown();
initMenuMobile();
initHour();
initBit();
fetchAnimais('../../data.json', '.numero-grid');