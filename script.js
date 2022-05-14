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
    imageMobile: 'images/modal-mobile-background.png',
    imageDesktop: 'images/modal-desktop-backgroun.png',
    // technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
};

const project2 = {
    closeButton: 'images/modal-close-button.svg',
    name: 'Keeping track of hundreds of components',
    description: 'Multi-Post Stories<br>Gain+Glory',
    imageMobile: 'images/modal-mobile-background.png',
    imageDesktop: 'images/modal-desktop-backgroun.png',
    // technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
};

const project3 = {
    closeButton: 'images/modal-close-button.svg',
    name: 'Keeping track of hundreds of components',
    description: 'Multi-Post Stories<br>Gain+Glory',
    imageMobile: 'images/modal-mobile-background.png',
    imageDesktop: 'images/modal-desktop-backgroun.png',
    // technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
};

const project4 = {
    closeButton: 'images/modal-close-button.svg',
    name: 'Keeping track of hundreds of components',
    description: 'Multi-Post Stories<br>Gain+Glory',
    imageMobile: 'images/modal-mobile-background.png',
    imageDesktop: 'images/modal-desktop-backgroun.png',
    // technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
  
};

const project5 = {
    closeButton: 'images/modal-close-button.svg',
    name: 'Keeping track of hundreds of components',
    description: 'Multi-Post Stories<br>Gain+Glory',
    imageMobile: 'images/modal-mobile-background.png',
    imageDesktop: 'images/modal-desktop-backgroun.png',
    // technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
};

const project6 = {
    closeButton: 'images/modal-close-button.svg',
    name: 'Keeping track of hundreds of components',
    description: 'Multi-Post Stories<br>Gain+Glory',
    imageMobile: 'images/modal-mobile-background.png',
    imageDesktop: 'images/modal-desktop-backgroun.png',
    // technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
};

// creating objets that holds the card information

const projects = [project1, project2, project3, project4, project5, project6];

const sectionElement = document.getElementById("projects-container");
sectionElement.className = "container-recent";

for(i = 0; i < projects.length; i++){
const gridProject = document.createElement('div');
gridProject.className = "grid-project";
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
    <button class="see-project" type="button">${projects[index].seeProject}</button>
 </div>
`;
});

// modal design begins


//  Display modal on button click
const seeProjectVar = document.querySelectorAll('.see-project');;
seeProjectVar.forEach((item) => {  
  item.addEventListener('click', () => {
    const modalContainer = document.createElement('section');
    modalContainer.className = 'modal-container';
    modalContainer.id = "modal-container-id";
    modalContainer.innerHTML = `
    <img src="" alt="">
    <img src="" alt="">
 <h2>hhhhhhhhhhhh</h2>
 <ul class="modal-skill display-flex">
  <li class="language-background">Ruby on rails</li>
  <li class="language-background">css</li>
  <li class="language-background" >JavaScript</li>   
</ul>
<p class="mobile-modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Quae modi inventore ex aut voluptatum eaque a repellendus animi dolore sed 
  temporibus autem amet quod, tempore architecto vitae aspernatur minima aliquid 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet eligendi 
  voluptatum mollitia autem, veritatis dicta doloremque nulla quibusdam,iusto 
  consequatur eum ad temporibus autem amet quod, tempore architecto vitae aspernatur 
  minima aliquid  Lorem ipsum dolor sit amet consectetur adipisicing 
  elit. Nesciunt amet eligendi voluptatum mollitia autem, veritatis dicta dolor
  emque nulla quibusdam, iusto consequatur eum ad 
  deleniti tempora et atque nihil voluptate veniam?</p>
  <div class="modal-btn-container display-flex"> <button class="see-project" type="button">See Live</button>
    <button class="see-project" type="button">See Source</button></div> 
       
    `;  
    document.getElementById("modal-main-container-id").appendChild(modalContainer);    
  });
});
