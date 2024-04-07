export {mainPage}

const pageContainer = document.querySelector('#content');

function mainPage(img){
 pageContainer.textContent = ''
  const homeContainer = document.createElement('div');
  const titleImgContainer = document.createElement('div');
  const homeTextContainer = document.createElement('div');
   homeContainer.id = 'homeContentContainer'
  const titleImg = document.createElement('img');
  homeTextContainer.id = 'homePageText'
  titleImg.src = img;
  titleImg.id = 'titleImg'
  const homeTitle = document.createElement('p');
  homeTitle.id = 'homeTitle'
  homeTitle.textContent = 'Southern Family Cookout'
  const homeSubtext = document.createElement('p')
  homeSubtext.id = 'homeSubtext'
  homeSubtext.textContent = "Food so nice you'll be lickin' your fingers twice."
  homeTextContainer.appendChild(homeTitle)
  homeTextContainer.appendChild(homeSubtext)
  titleImgContainer.appendChild(titleImg);
  homeContainer.appendChild(titleImgContainer);
  homeContainer.appendChild(homeTextContainer)
  pageContainer.appendChild(homeContainer);
}