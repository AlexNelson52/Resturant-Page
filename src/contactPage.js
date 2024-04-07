export{contactPage};

const pageContainer = document.querySelector('#content');

function contactPage(){
  pageContainer.textContent = ''
  const ContactContainer = document.createElement('div');
  ContactContainer.id = 'contactContent';
  const contactInfoCont1 = document.createElement('div');
  contactInfoCont1.id = 'contactContainer1'
  const contactInfoText1 = document.createElement('h1');
  contactInfoText1.textContent = 'Address'
  const contactInfoSubtext1 = document.createElement('p');
  contactInfoSubtext1.textContent = '5555 bbq lane, BarbecueSauce, GA 55505'

  const contactInfoCont2 = document.createElement('div');
  contactInfoCont2.id = 'contactContainer2'
  const contactInfoText2 = document.createElement('h1');
  const contactInfoSubtext2Hour1= document.createElement('p');
  const contactInfoSubtext2Hour2= document.createElement('p');
  const contactInfoSubtext2Hour3= document.createElement('p');
  const contactInfoSubtext2Hour4= document.createElement('p');
  const contactInfoSubtext2Hour5= document.createElement('p');
  const contactInfoSubtext2Hour6= document.createElement('p');
  const contactInfoSubtext2Hour7= document.createElement('p');
  contactInfoText2.textContent = "Hours"
  contactInfoSubtext2Hour1.textContent = 'Monday: Closed'
  contactInfoSubtext2Hour2.textContent = 'Tuesday: Closed'
  contactInfoSubtext2Hour3.textContent = 'Wednesday: 12pm-8pm'
  contactInfoSubtext2Hour4.textContent = 'Thursday: 12pm-8pm'
  contactInfoSubtext2Hour5.textContent = 'Firday: 12pm-8pm'
  contactInfoSubtext2Hour6.textContent = 'Saturday: 12pm-8pm'
  contactInfoSubtext2Hour7.textContent = 'Sunday: 12pm-8pm'

  const contactInfoCont3 = document.createElement('div');
  contactInfoCont3.id = 'contactContainer3'
  const contactInfoText3 = document.createElement('h1');
  const contactInfoSubtext3= document.createElement('p');
  contactInfoText3.textContent = 'Telephone Number'
  contactInfoSubtext3.textContent = '555-555-5555'
  

  contactInfoCont1.appendChild(contactInfoText1)
  contactInfoCont1.appendChild(contactInfoSubtext1)
  contactInfoCont2.appendChild(contactInfoText2);
  contactInfoCont2.appendChild(contactInfoSubtext2Hour1);
  contactInfoCont2.appendChild(contactInfoSubtext2Hour2);
  contactInfoCont2.appendChild(contactInfoSubtext2Hour3);
  contactInfoCont2.appendChild(contactInfoSubtext2Hour4);
  contactInfoCont2.appendChild(contactInfoSubtext2Hour5);
  contactInfoCont2.appendChild(contactInfoSubtext2Hour6);
  contactInfoCont2.appendChild(contactInfoSubtext2Hour7);
  contactInfoCont3.appendChild(contactInfoText3);
  contactInfoCont3.appendChild(contactInfoSubtext3);
  ContactContainer.appendChild(contactInfoCont1);
  ContactContainer.appendChild(contactInfoCont2);
  ContactContainer.appendChild(contactInfoCont3);

  pageContainer.appendChild(ContactContainer)
}