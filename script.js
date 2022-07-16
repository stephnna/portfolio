const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamBurger.addEventListener('click', () => {
  hamBurger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

// creating first card item i.e grid project

const projects = [{
  closeButton: 'images/modal-close-button.svg',
  name: 'SkillHub Academy! An online ongoing learning platform',
  description: 'SkillHub Academy!',
  imageMobile: 'images/skillHub-mobile.png',
  imageDesktop: 'images/skillHub-desktop.png',
  rubySkill: 'Ruby on rails',
  cssSkill: 'css',
  jsSkill: 'JavaScript',
  htmlSkill: 'html',
  CodeKit: 'Codekit',
  gitHub: 'GitHub',
  boostrap: 'Boostrap',
  terminal: 'Terminal',
  codePen: 'Codepen',
  seeProject: 'See Project',
  live: 'https://stephnna.github.io/skillhub-academy/',
  source: 'https://github.com/stephnna/skillhub-academy',
  modalDescription: 'This project is a prototype of an online learning platform where a learner can learn available skill of his choice thought by porofessionals.',
},
{
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Coming soon!',
  imageMobile: 'images/modal-mobile-background.png',
  imageDesktop: 'images/modal-desktop-backgroun.png',
  rubySkill: 'Ruby on rails',
  cssSkill: 'css',
  jsSkill: 'JavaScript',
  htmlSkill: 'html',
  CodeKit: 'Codekit',
  gitHub: 'GitHub',
  boostrap: 'Boostrap',
  terminal: 'Terminal',
  codePen: 'Codepen',
  seeProject: 'See Project',
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
  modalDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi inventore ex aut voluptatum eaque a repellendus animi dolore sed  temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam,iusto consequatur eum ad temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam, iusto consequatur eum ad deleniti tempora et atque nihil voluptate veniam?',

},
{
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Coming soon!',
  imageMobile: 'images/skill-hub.png',
  imageDesktop: 'images/skill-hub.png',
  rubySkill: 'Ruby on rails',
  cssSkill: 'css',
  jsSkill: 'JavaScript',
  htmlSkill: 'html',
  CodeKit: 'Codekit',
  gitHub: 'GitHub',
  boostrap: 'Boostrap',
  terminal: 'Terminal',
  codePen: 'Codepen',
  seeProject: 'See Project',
  live: 'https://stephnna.github.io/skillhub-academy/',
  source: 'https://github.com/stephnna/skillhub-academy',
  modalDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi inventore ex aut voluptatum eaque a repellendus animi dolore sed  temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam,iusto consequatur eum ad temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam, iusto consequatur eum ad deleniti tempora et atque nihil voluptate veniam?',

},
{
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Coming soon!',
  imageMobile: 'images/modal-mobile-background.png',
  imageDesktop: 'images/modal-desktop-backgroun.png',
  rubySkill: 'Ruby on rails',
  cssSkill: 'css',
  jsSkill: 'JavaScript',
  htmlSkill: 'html',
  CodeKit: 'Codekit',
  gitHub: 'GitHub',
  boostrap: 'Boostrap',
  terminal: 'Terminal',
  codePen: 'Codepen',
  seeProject: 'See Project',
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
  modalDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi inventore ex aut voluptatum eaque a repellendus animi dolore sed  temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam,iusto consequatur eum ad temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam, iusto consequatur eum ad deleniti tempora et atque nihil voluptate veniam?',

},
{
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Coming soon!',
  imageMobile: 'images/modal-mobile-background.png',
  imageDesktop: 'images/modal-desktop-backgroun.png',
  ubySkill: 'Ruby on rails',
  cssSkill: 'css',
  jsSkill: 'JavaScript',
  htmlSkill: 'html',
  CodeKit: 'Codekit',
  gitHub: 'GitHub',
  boostrap: 'Boostrap',
  terminal: 'Terminal',
  codePen: 'Codepen',
  seeProject: 'See Project',
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
  modalDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi inventore ex aut voluptatum eaque a repellendus animi dolore sed  temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam,iusto consequatur eum ad temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam, iusto consequatur eum ad deleniti tempora et atque nihil voluptate veniam?',

},
{
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Coming soon!',
  imageMobile: 'images/modal-mobile-background.png',
  imageDesktop: 'images/modal-desktop-backgroun.png',
  rubySkill: 'Ruby on rails',
  cssSkill: 'css',
  jsSkill: 'JavaScript',
  htmlSkill: 'html',
  CodeKit: 'Codekit',
  gitHub: 'GitHub',
  boostrap: 'Boostrap',
  terminal: 'Terminal',
  codePen: 'Codepen',
  seeProject: 'See Project',
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
  modalDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi inventore ex aut voluptatum eaque a repellendus animi dolore sed  temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam,iusto consequatur eum ad temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam, iusto consequatur eum ad deleniti tempora et atque nihil voluptate veniam?',

},
];

const sectionElement = document.getElementById('projects-container');
sectionElement.className = 'container-recent';

for (let i = 0; i < projects.length; i += 1) {
  const gridProject = document.createElement('div');
  gridProject.className = 'grid-project';
  sectionElement.appendChild(gridProject);
}

Array.from(sectionElement.children).forEach((child, index) => {
  child.innerHTML = `
    <div class="multi-post">
    <h3 class="multi-text-color">${projects[index].description}</h3>
     <ul class="language display-flex">
     <li class="language-background">${projects[index].rubySkill}</li>
     <li class="language-background">${projects[index].cssSkill}</li>
     <li class="language-background">${projects[index].jsSkill}</li>
     <li class="language-background">${projects[index].htmlSkill}</li> 
     </ul>   
    <button id="${[index]}" class="see-project" type="button">${projects[index].seeProject}</button>
 </div>
`;
});

// modal design begins

//  Display modal on button click
const seeProjectVar = document.querySelectorAll('.see-project');
seeProjectVar.forEach((item) => {
  item.addEventListener('click', () => {
    const modalContainer = document.createElement('section');
    modalContainer.className = 'modal-container';
    modalContainer.id = 'modal-container-id';
    modalContainer.innerHTML = `  
    <div><img class="close" src="${projects[item.id].closeButton}" alt="close-button"></div>
    <div class="mobile-modal" style="background-image: url(${projects[item.id].imageMobile});"></div>
    <div class="desktop-modal-background" style="background-image: url(${projects[item.id].imageDesktop});"></div>
 <h2 class="mobile-modal-title">${projects[item.id].name}</h2>
 <ul class="mobile-modal-skill display-flex">
  <li class="language-background">${projects[item.id].rubySkill}</li>
  <li class="language-background">${projects[item.id].cssSkill}</li>
  <li class="language-background" >${projects[item.id].jsSkill}</li>   
</ul>
<p class="mobile-modal-description">${projects[item.id].modalDescription}</p>
  <div class="mobile-modal-btn display-flex">
  <a href="${projects[item.id].live}"><button class="see-btn" type="button">See Live<img src="images/live.svg" alt="see-live-image"></button></a> 
  <a href="${projects[item.id].source}"><button class="see-btn" type="button">See Source <img src="images/github-image.svg" alt="github-image"></button></a> 
  </div> 
   
  <div class="modal-desktop-name-button">
     <h2>${projects[item.id].name}</h2>
     <div desktop-modal-btn> 
     <a href="${projects[item.id].live}"><button class="see-btn" type="button">See Live<img src="images/live.svg" alt="see-live-image"></button></a> 
     <a href="${projects[item.id].source}"><button class="see-btn" type="button">See Source <img src="images/github-image.svg" alt="github-image"></button></a>
     </div> 
 </div>
 <ul class="desktop-modal-skill">
  <li class="desktop-modal-item">${projects[item.id].CodeKit}</li>
  <li class="desktop-modal-item">${projects[item.id].gitHub}</li>
  <li class="desktop-modal-item">${projects[item.id].jsSkill}</li>
  <li class="desktop-modal-item">${projects[item.id].boostrap}</li> 
  <li class="desktop-modal-item">${projects[item.id].terminal}</li>
  <li class="desktop-modal-item">${projects[item.id].codePen}</li>        
</ul>
<p class="desktop-modal-description">${projects[item.id].modalDescription}</p>       
    `;
    document.getElementById('modal-main-container-id').appendChild(modalContainer);

    const closeBtn = document.querySelectorAll('.close');
    closeBtn.forEach((el) => {
      el.addEventListener('click', () => {
        modalContainer.classList.add('hide');
      });
    });
  });
});

// form validation
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const error = document.querySelector('#error-msg');

// local storage
const userName = document.querySelector('#full-name');
const userMsg = document.querySelector('#text-area');

function dataStorage() {
  const visitor = {
    Name: userName.value,
    Email: email.value,
    Message: userMsg.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

userName.addEventListener('focusout', dataStorage);
email.addEventListener('focusout', dataStorage);
userMsg.addEventListener('focusout', dataStorage);

const userDataObject = JSON.parse(localStorage.getItem('visitor'));

if (userDataObject) {
  userName.value = userDataObject.Name;
  email.value = userDataObject.Email;
  userMsg.value = userDataObject.Message;
}
error.style.visibility = 'hidden';

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    error.style.visibility = 'visible';
    error.innerHTML = 'Email must be lowercase letters!';

    setTimeout(() => {
      error.style.visibility = 'hidden';
    }, 4000);
  } else {
    error.style.visibility = 'hidden';
  }
});
