import { typeAndBackspace } from './modules/animationShowcase.js';
import { navbarBorder } from './modules/navbarBorder.js';
import { smoothScroll } from './modules/smoothScroll.js';
import { reloadLogo } from './modules/reloadLogo.js';
import { currentYear } from './modules/currentYear.js';
import {
  switchToPortuguese,
  switchToEnglish,
} from './modules/languageSwitcher.js';

const textElement = document.querySelector('.span-title');

typeAndBackspace(textElement);
navbarBorder();
smoothScroll();
reloadLogo();
currentYear();
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('pt-br').addEventListener('click', () => {
    switchToPortuguese();
  });
  document.getElementById('en-us').addEventListener('click', () => {
    switchToEnglish();
  });
});
