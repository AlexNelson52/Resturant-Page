export {buttons}
export {mainPage}

const header = document.querySelector('#navBarHeader');
const navBar = document.querySelector('#navBar');
const pageContainer = document.querySelector('#content');




function buttons(){
 const listDiv = document.createElement('ul');

 const home = document.createElement('button');
 const menu = document.createElement('button');
 const contact = document.createElement('button');
 home.classList.add('headerBtns')
 menu.classList.add('headerBtns')
 contact.classList.add('headerBtns')
 home.textContent = 'Home';
 menu.textContent = 'Menu';
 contact.textContent = 'Contact';
 listDiv.style.display = 'flex';
 listDiv.style.justifyContent = 'center';
 listDiv.style.gap = '2%';
 navBar.appendChild(listDiv);
 listDiv.appendChild(home);
 listDiv.appendChild(menu);
 listDiv.appendChild(contact);
}

function mainPage(){
  const homeContainer = document.createElement('div');
  const titleImgContainer = document.createElement('div');
  homeContainer.id = 'homeContainer'
  const homeTitle = document.createElement('p');
  homeTitle.id = 'homeTitle'
  homeTitle.textContent = 'Southern Family Cookout'
  titleImgContainer.appendChild(homeTitle)
  homeContainer.appendChild(titleImgContainer)
  pageContainer.appendChild(homeContainer)

}