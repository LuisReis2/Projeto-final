import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-view.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDown from './modules/drop-down-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import initHour from './modules/horario.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitCoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

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

const scrollanima = new ScrollAnima('[data-anime="scroll"]');
scrollanima.init()

const dropdown = new DropDown('[data-dropdown]');
dropdown.init();

const menumobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menumobile.init();
initHour();
fetchAnimais('../../data.json', '.numero-grid');
fetchBitCoin('https://blockchain.info/ticker', '.bit');
