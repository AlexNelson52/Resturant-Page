import {mainPage} from "./mainPage";
import "./style.css"
import bbqImg from './assets/bbqImg.jpg';
import {menuPage} from "./menu.js";
import { contactPage } from "./contactPage.js";
import porkSandwhich from './assets/porkSandwhich.jpg'

const homeBtn = document.querySelector('#homeBtn')
const menuBtn = document.querySelector('#menuBtn')
const contactBtn = document.querySelector('#contactBtn')

mainPage(bbqImg)

homeBtn.addEventListener('click', () => {
  mainPage(bbqImg)
})

menuBtn.addEventListener('click', menuPage)

contactBtn.addEventListener('click', contactPage)

