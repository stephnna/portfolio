const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamBurger.addEventListener('click', () => {
  hamBurger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

// creating first card item i.e grid project
const project1 = {
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Multi-Post Stories<br>Gain+Glory',
  imageMobile: 'https://s3-alpha-sig.figma.com/img/b78a/08f8/8874319d3865bd07c14715a7978db1b9?Expires=1653264000&Signature=TWI5vpy4KVYovInyT9RhE1ybwfSBwAtDzppE4WiqRVoEyy~VlKn8ui9H4Zyu~aNfbMLWL1Htt6l0VxEWGlJYZSZETnhPWZYoNxeiKt2plVGwNsg~Mrhc~3eXkxyM1IHCFaW8QYXu4yjIDlWU06yBgoEQ1rZQHoae9x5205FkfT3I~93xpOnui9UFYjJe2ynGSohuzKLH9fx-z8RGdZF97nc1fl8ca2CuEGqReTGQuJI1QdLGxSyIA~sCTjG0ZPuzq~dVLG2DTuwqA7DAqJArANZlcZZUxv2Xx2g2VPpWVJU8HXPBn16DGQTQw52SpT3fW7sWM5se9vrNk8kzgfRLAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
};

const project2 = {
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Multi-Post Stories<br>Gain+Glory',
  imageMobile: 'https://s3-alpha-sig.figma.com/img/b78a/08f8/8874319d3865bd07c14715a7978db1b9?Expires=1653264000&Signature=TWI5vpy4KVYovInyT9RhE1ybwfSBwAtDzppE4WiqRVoEyy~VlKn8ui9H4Zyu~aNfbMLWL1Htt6l0VxEWGlJYZSZETnhPWZYoNxeiKt2plVGwNsg~Mrhc~3eXkxyM1IHCFaW8QYXu4yjIDlWU06yBgoEQ1rZQHoae9x5205FkfT3I~93xpOnui9UFYjJe2ynGSohuzKLH9fx-z8RGdZF97nc1fl8ca2CuEGqReTGQuJI1QdLGxSyIA~sCTjG0ZPuzq~dVLG2DTuwqA7DAqJArANZlcZZUxv2Xx2g2VPpWVJU8HXPBn16DGQTQw52SpT3fW7sWM5se9vrNk8kzgfRLAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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

};

const project3 = {
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Multi-Post Stories<br>Gain+Glory',
  imageMobile: 'https://s3-alpha-sig.figma.com/img/b78a/08f8/8874319d3865bd07c14715a7978db1b9?Expires=1653264000&Signature=TWI5vpy4KVYovInyT9RhE1ybwfSBwAtDzppE4WiqRVoEyy~VlKn8ui9H4Zyu~aNfbMLWL1Htt6l0VxEWGlJYZSZETnhPWZYoNxeiKt2plVGwNsg~Mrhc~3eXkxyM1IHCFaW8QYXu4yjIDlWU06yBgoEQ1rZQHoae9x5205FkfT3I~93xpOnui9UFYjJe2ynGSohuzKLH9fx-z8RGdZF97nc1fl8ca2CuEGqReTGQuJI1QdLGxSyIA~sCTjG0ZPuzq~dVLG2DTuwqA7DAqJArANZlcZZUxv2Xx2g2VPpWVJU8HXPBn16DGQTQw52SpT3fW7sWM5se9vrNk8kzgfRLAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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

};

const project4 = {
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Multi-Post Stories<br>Gain+Glory',
  imageMobile: 'https://s3-alpha-sig.figma.com/img/b78a/08f8/8874319d3865bd07c14715a7978db1b9?Expires=1653264000&Signature=TWI5vpy4KVYovInyT9RhE1ybwfSBwAtDzppE4WiqRVoEyy~VlKn8ui9H4Zyu~aNfbMLWL1Htt6l0VxEWGlJYZSZETnhPWZYoNxeiKt2plVGwNsg~Mrhc~3eXkxyM1IHCFaW8QYXu4yjIDlWU06yBgoEQ1rZQHoae9x5205FkfT3I~93xpOnui9UFYjJe2ynGSohuzKLH9fx-z8RGdZF97nc1fl8ca2CuEGqReTGQuJI1QdLGxSyIA~sCTjG0ZPuzq~dVLG2DTuwqA7DAqJArANZlcZZUxv2Xx2g2VPpWVJU8HXPBn16DGQTQw52SpT3fW7sWM5se9vrNk8kzgfRLAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
};

const project5 = {
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Multi-Post Stories<br>Gain+Glory',
  imageMobile: 'https://s3-alpha-sig.figma.com/img/b78a/08f8/8874319d3865bd07c14715a7978db1b9?Expires=1653264000&Signature=TWI5vpy4KVYovInyT9RhE1ybwfSBwAtDzppE4WiqRVoEyy~VlKn8ui9H4Zyu~aNfbMLWL1Htt6l0VxEWGlJYZSZETnhPWZYoNxeiKt2plVGwNsg~Mrhc~3eXkxyM1IHCFaW8QYXu4yjIDlWU06yBgoEQ1rZQHoae9x5205FkfT3I~93xpOnui9UFYjJe2ynGSohuzKLH9fx-z8RGdZF97nc1fl8ca2CuEGqReTGQuJI1QdLGxSyIA~sCTjG0ZPuzq~dVLG2DTuwqA7DAqJArANZlcZZUxv2Xx2g2VPpWVJU8HXPBn16DGQTQw52SpT3fW7sWM5se9vrNk8kzgfRLAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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

};

const project6 = {
  closeButton: 'images/modal-close-button.svg',
  name: 'Keeping track of hundreds of components',
  description: 'Multi-Post Stories<br>Gain+Glory',
  imageMobile: 'https://s3-alpha-sig.figma.com/img/b78a/08f8/8874319d3865bd07c14715a7978db1b9?Expires=1653264000&Signature=TWI5vpy4KVYovInyT9RhE1ybwfSBwAtDzppE4WiqRVoEyy~VlKn8ui9H4Zyu~aNfbMLWL1Htt6l0VxEWGlJYZSZETnhPWZYoNxeiKt2plVGwNsg~Mrhc~3eXkxyM1IHCFaW8QYXu4yjIDlWU06yBgoEQ1rZQHoae9x5205FkfT3I~93xpOnui9UFYjJe2ynGSohuzKLH9fx-z8RGdZF97nc1fl8ca2CuEGqReTGQuJI1QdLGxSyIA~sCTjG0ZPuzq~dVLG2DTuwqA7DAqJArANZlcZZUxv2Xx2g2VPpWVJU8HXPBn16DGQTQw52SpT3fW7sWM5se9vrNk8kzgfRLAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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

};

// creating objets that holds the card information

const projects = [project1, project2, project3, project4, project5, project6];

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
    <img class="close" src="${projects[item.id].closeButton}" alt="">
    <img class="mobile-modal" src="${projects[item.id].imageMobile}" alt="">
    <img class="desktop-modal" src="${projects[item.id].imageDesktop}" alt="">
 <h2>${projects[item.id].name}</h2>
 <ul class="modal-skill display-flex">
  <li class="language-background">${projects[item.id].rubySkill}</li>
  <li class="language-background">${projects[item.id].cssSkill}</li>
  <li class="language-background" >${projects[item.id].jsSkill}</li>   
</ul>
<p class="mobile-modal-description">${projects[item.id].modalDescription}</p>
  <div class="modal-btn-container display-flex"><button class="see-project" type="button">See Live</button>
    <button class="see-project" type="button">See Source</button></div> 
       
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

// local storage

const userName = document.querySelector('#full-name');
const userMsg = document.querySelector('#text-area');

function dataStorage() {
  const visitor = {
    Name: userName.value,
    Email: email.value,
    Message: userMsg.value
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