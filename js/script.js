import ScrollSuave from './modules/scroll-suave.js';
import initAccordion from './modules/accordion-list.js';
import initTabNav from './modules/tab-view.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/drop-down-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHour from './modules/horario.js';
import initFetch from './modules/fetch-animais.js';
import initBit from './modules/fetch-bitcoin.js';
import initAnimaScroll from './modules/anima-scroll.js';

const scrollsuave = new ScrollSuave('[data-tab="menunav"] a[href^="#"]');

scrollsuave.init();

initAnimaScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDown();
initMenuMobile();
initHour();
initFetch();
initBit();
