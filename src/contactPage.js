export{contactPage};

const pageContainer = document.querySelector('#content');

function contactPage(){
  pageContainer.textContent = ''
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menuContent';
  const foodItem1Container = document.createElement('div');
  const foodItem1TextContainer = document.createElement('div');
  const foodItem1Header = document.createElement('p');
  foodItem1Header.textContent = 'TESTTTTTTTTTT'

  const foodItem1Subtext = document.createElement('p');
  foodItem1Subtext.textContent = 'TESTTTTTTTe bone'
  const foodItem1Img = document.createElement('img');
  foodItem1TextContainer.appendChild(foodItem1Header);
  foodItem1TextContainer.appendChild(foodItem1Subtext);
  menuContainer.appendChild(foodItem1TextContainer);
  pageContainer.appendChild(menuContainer)
}