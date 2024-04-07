import {mainPage} from "./mainPage";
import "./style.css"
import bbqImg from './assets/bbqImg.jpg';
import {menuPage} from "./menu.js";
import { contactPage } from "./contactPage.js";
import toggleBtn from "./toggleBtn.js"
const homeBtn = document.querySelector('#homeBtn')
const menuBtn = document.querySelector('#menuBtn')
const contactBtn = document.querySelector('#contactBtn')


mainPage(bbqImg);
toggleBtn(homeBtn.id)

homeBtn.addEventListener('click', () => {
  mainPage(bbqImg)
  toggleBtn(homeBtn.id);
})

menuBtn.addEventListener('click', () => {
  menuPage();
  toggleBtn(menuBtn.id);
})

contactBtn.addEventListener('click', () => {
  contactPage();
  toggleBtn(contactBtn.id);
})



