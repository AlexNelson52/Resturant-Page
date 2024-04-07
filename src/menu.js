export {menuPage}
import porkSandwhich from './assets/porkSandwhich.jpg'
import ribs from './assets/ribs.jpg'
import burger from './assets/burger.jpg'
const pageContainer = document.querySelector('#content');


function menuPage(){
  pageContainer.textContent = ''
  
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menuContent';

  const foodItem1Container = document.createElement('div');
  foodItem1Container.id = 'foodItemContainer1'

  const foodItem1TextContainer = document.createElement('div');
  foodItem1TextContainer.classList.add('textContainer')

  const foodItem1Header = document.createElement('p');
  foodItem1Header.classList.add('foodItemHeader')
  foodItem1Header.textContent = 'Slow Cooked Pork Sandwhich'


  const foodItem1Subtext = document.createElement('p');
  foodItem1Subtext.id= 'foodItem1Subtext'
  foodItem1Subtext.textContent = 'Slow cooked pork so moist that it slides off the bone'

  const foodItem1ImgDiv = document.createElement('div');
  foodItem1ImgDiv.classList.add('foodImgDiv')

  const foodItem1Img = document.createElement('img');
  foodItem1Img.id = 'foodImg1'
  foodItem1Img.src = porkSandwhich

  foodItem1TextContainer.appendChild(foodItem1Header);
  foodItem1TextContainer.appendChild(foodItem1Subtext);
  foodItem1ImgDiv.appendChild(foodItem1Img)
  foodItem1Container.appendChild(foodItem1ImgDiv)
  foodItem1Container.appendChild(foodItem1TextContainer)
  menuContainer.appendChild(foodItem1Container)
  pageContainer.appendChild(menuContainer)

  const foodItem2Container = document.createElement('div');
  foodItem2Container.id = 'foodItem2Container'

  const foodItem2TextContainer = document.createElement('div');
  foodItem2TextContainer.classList.add('textContainer')

  const foodItem2Header = document.createElement('p');
  foodItem2Header.classList.add('foodItemHeader')
  foodItem2Header.textContent = 'Smoked Barbecue Ribs'

  const foodItem2Subtext = document.createElement('p');
  foodItem2Subtext.textContent = 'Slow cooked pork so moist that it slides off the bone'

  const foodItem2ImgDiv = document.createElement('div');
  const foodItem2Img = document.createElement('img');
  foodItem2ImgDiv.classList.add('foodImgDiv')
  foodItem2Img.id = 'foodImg2'
  foodItem2Img.src = ribs

  foodItem2TextContainer.appendChild(foodItem2Header);
  foodItem2TextContainer.appendChild(foodItem2Subtext);
  foodItem2ImgDiv.appendChild(foodItem2Img)
  foodItem2Container.appendChild(foodItem2ImgDiv)
  foodItem2Container.appendChild(foodItem2TextContainer)
  menuContainer.appendChild(foodItem2Container)
  pageContainer.appendChild(menuContainer)

  const foodItem3Container = document.createElement('div');
  foodItem3Container.id = 'foodItem3Container'

  const foodItem3TextContainer = document.createElement('div');
  foodItem3TextContainer.classList.add('textContainer')

  const foodItem3Header = document.createElement('p');
  foodItem3Header.classList.add('foodItemHeader')
  foodItem3Header.textContent = 'Gourment Barbacue Burgers'

  const foodItem3Subtext = document.createElement('p');
  foodItem3Subtext.textContent = '100% USDA Approved quality Fresh grass-fed beef, topped with Premium Authentic Cookout sauce. '
  
  const foodItem3Img = document.createElement('img');
  const foodItem3ImgDiv = document.createElement('div');
  foodItem3ImgDiv.classList.add('foodImgDiv')
  foodItem3Img.id = 'foodImg3'
  foodItem3Img.src = burger

  foodItem3TextContainer.appendChild(foodItem3Header);
  foodItem3TextContainer.appendChild(foodItem3Subtext);
  foodItem3ImgDiv.appendChild(foodItem3Img)
  foodItem3Container.appendChild(foodItem3ImgDiv)
  foodItem3Container.appendChild(foodItem3TextContainer)
  menuContainer.appendChild(foodItem3Container)
  pageContainer.appendChild(menuContainer)
}
