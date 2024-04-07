export default function toggleBtn(id){
  const buttonArray = document.getElementsByClassName('headerBtns')
  for(let btn of buttonArray){
    if (btn.id === id){
      btn.style.backgroundColor = 'orange'
      btn.style.color = 'black'
    } else{
      btn.style.backgroundColor = 'black';
      btn.style.color = 'white';
    }
  }
}