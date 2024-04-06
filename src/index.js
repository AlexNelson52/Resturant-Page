import {mainPage} from "./mainPage";
import "./style.css"
import bbqImg from './assets/bbqImg.jpg';

import {menuPage} from "./menu.js";

const homeBtn = document.querySelector('#homeBtn')
const pageContainer = document.querySelector('#content');

const menuBtn = document.querySelector('#menuBtn')

homeBtn.addEventListener('click', mainPage(bbqImg))

menuBtn.addEventListener('click', menuPage())

