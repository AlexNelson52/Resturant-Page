export {mainPage}

const header = document.querySelector('#navBarHeader');
const navBar = document.querySelector('#navBar');
const pageContainer = document.querySelector('#content');




function mainPage(){
 const listDiv = document.createElement('ul');
 const home = document.createElement('button');
 const menu = document.createElement('button');
 const contact = document.createElement('button');
 home.textContent = 'Home';
 menu.textContent = 'Menu';
 contact.textContent = 'Contant';
 listDiv.style.display = 'flex';
 listDiv.style.justifyContent = 'center';
 listDiv.style.gap = '2%';
 home.style.backgroundColor = 'blue';
 menu.style.backgroundColor = 'blue';
 contact.style.backgroundColor = 'blue';
 navBar.appendChild(listDiv);
 listDiv.appendChild(home);
 listDiv.appendChild(menu);
 listDiv.appendChild(contact);
}