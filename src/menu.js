export {menuPage}



function menuPage(){
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menuContent';
  const foodItem1Container = document.createElement('div');
  const foodItem1TextContainer = document.createElement('div');
  const foodItem1Header = document.createElement('p');
  foodItem1Header.textContent = 'Slow Cooked Pork'

  const foodItem1Subtext = document.createElement('p');
  foodItem1Subtext.textContent = 'Slow cooked pork so moist that it slides off the bone'
  const foodItem1Img = document.createElement('img');
  foodItem1TextContainer.appendChild(foodItem1Header);
  foodItem1TextContainer.appendChild(foodItem1Subtext);
  menuContainer.appendChild(foodItem1TextContainer)
}