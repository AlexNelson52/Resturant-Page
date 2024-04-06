export {mainPage}


const header = document.querySelector('#navBarHeader');
const navBar = document.querySelector('#navBar');
const pageContainer = document.querySelector('#content');

function mainPage(img){
  const homeContainer = document.createElement('div');
  const titleImgContainer = document.createElement('div');
  const homeSubtextContainer = document.createElement('div');

  titleImgContainer.id = 'homePagecontainer'
  homeContainer.id = 'homeContainer'
  const titleImg = document.createElement('img');
  titleImg.src = img;
  titleImg.id = 'titleImg'
  const homeTitle = document.createElement('p');
  homeTitle.id = 'homeTitle'
  homeTitle.textContent = 'Southern Family Cookout'
  const homeSubtext = document.createElement('p')
  homeSubtext.textContent = "Food so nice you'll be lickin' your fingers twice."
  titleImgContainer.appendChild(titleImg);
  titleImgContainer.appendChild(homeTitle);
  homeContainer.appendChild(titleImgContainer);
  pageContainer.appendChild(homeContainer);
  titleImgContainer.appendChild(homeSubtextContainer)
  homeSubtextContainer.appendChild(homeSubtext)
}