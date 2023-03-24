const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamBurger.addEventListener('click', () => {
  hamBurger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

const navbar = document.getElementById('navbar');

const sticky = navbar.offsetTop;

const myFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = () => myFunction();

// creating first card item i.e grid project

const projects = [
  {
    closeButton: 'images/modal-close-button.svg',
    name: 'Online Hotel Booking',
    description: 'Online Hotel Booking',
    imageMobile: 'images/hotel_modal.jpg',
    imageDesktop: 'images/hotel-modal-desktop.png',
    rubySkill: 'Ruby on rails',
    cssSkill: 'Ruby',
    jsSkill: 'PosgreSQL',
    htmlSkill: 'React',
    CodeKit: 'Ruby',
    gitHub: 'Ruby on rails',
    boostrap: 'React',
    terminal: 'Javascript',
    codePen: 'Redux',
    seeProject: 'See Project',
    live: 'https://hotel-frontend-rosy.vercel.app/',
    source: 'https://github.com/t-bello7/hotel-backend',
    modalDescription: `Tha goal of this project are as follows:
    Apply technical knowledge and skills gained in previous modules in a complex project.
    Understand pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.
    Understand principles of Ruby on Rails and React frameworks.
    Apply Ruby best practices and language style guides in code.
    Apply RoR best practices and language style guides in code (e.g. thin controllers).
    Apply JavaScript best practices and language style guides in code.
    Apply React best practices and language style guides in code.
    Learn about and practice giving constructive feedback to teammates.
    Perform a code review for a team member.
    Use the "Review change"" feature from GitHub.
    Write clear, professional, and respectful review comments for other team members.
    Explain "why" a change is requested when giving a code review.
    Plan a 2+ week project with no interim Microverse-set milestones and submit it on time.
    Apply knowledge of setting working agreements to set group project teams up for success.
    Independently implement best practices for group agreements to improve teamwork in larger group project.
    Demonstrate ability to apply best practices of communication for resolving teamwork challenges.
    Understand that respect is the foundation of strong relationship-building with teammates.
    Show up throughout group projects as a reliable and committed team member who communicates and manages your time effectively.
    Recognize the importance of investing in good working relationships with teammates.
    Understand principles of strong teamwork (being reliable, committed, and consistent) and how to apply them in group projects.
    Recognize the value of making equal contributions to group projects to produce the best outcome.
    Use empty Kanban board to manage tasks with team and own time on the project.`,
  },
  {
    closeButton: 'images/modal-close-button.svg',
    name: 'Coincript Market',
    description: 'Crypto Price Tracking App',
    imageMobile: 'images/coincript_modal.jpg',
    imageDesktop: 'images/coincript_desktop.png',
    rubySkill: 'JavaScript',
    cssSkill: 'React',
    jsSkill: 'Redux',
    htmlSkill: 'Jest',
    CodeKit: 'Codekit',
    gitHub: 'React',
    boostrap: 'JavaScript',
    terminal: 'Jest',
    codePen: 'React testing Library',
    seeProject: 'See Project',
    live: 'https://coincript.netlify.app/',
    source: 'https://github.com/stephnna/coincrypt-app',
    modalDescription: 'Coincript is a price-tracking website for digital assets in a fast paced cryptocurrency world. It is useful by making crypto changes discoverable globally thereby empowering retail users with market state for effective trading decision.',

  },
  {
    closeButton: 'images/modal-close-button.svg',
    name: 'SkillHub Academy',
    description: 'Online Skillhub Academy',
    imageMobile: 'images/skillhub-mobile.png',
    imageDesktop: 'images/skillhub_desktop.png',
    rubySkill: 'JavaScript',
    cssSkill: 'css',
    jsSkill: 'Git',
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
    name: 'E Meal',
    description: 'E Meal booking',
    imageMobile: 'images/meal_mobile.png',
    imageDesktop: 'images/meal-screnshot.png',
    rubySkill: 'JavaScript',
    cssSkill: 'css',
    jsSkill: 'Webpack',
    htmlSkill: 'html',
    CodeKit: 'Webpack',
    gitHub: 'GitHub',
    boostrap: 'Boostrap',
    terminal: 'Terminal',
    codePen: 'GitFlow',
    seeProject: 'See Project',
    live: 'https://stephnna.github.io/e-meal/',
    source: 'https://github.com/stephnna/e-meal',
    modalDescription: 'E Meal App is a prototype of a single page dynamically created web application that allows users to like, comment, and make a reservation for their favorite meal. When the page loads, the data is fetched from an API and get displayed on the web page By clicking on the `like button` the number of like is increased and stored in the involvement API; By clicking on the `Comment button` to display the description of the selected meal, the list of all comments, and added a new comment; By clicking on the `Reservation button` to display the list of all reservations and make a new Reservation',

  },
  {
    closeButton: 'images/modal-close-button.svg',
    name: 'Math Magicians',
    description: 'Math Magicians',
    imageMobile: 'images/calculator_mobile.png',
    imageDesktop: 'images/calculator-sreenshot.png',
    rubySkill: 'React',
    cssSkill: 'Node.js',
    jsSkill: 'Css',
    htmlSkill: 'JavaScript',
    CodeKit: 'Node.js',
    gitHub: 'React',
    boostrap: 'React',
    terminal: 'Terminal',
    codePen: 'GitFlow',
    seeProject: 'See Project',
    live: 'https://math-calculator-magician.netlify.app/',
    source: 'https://github.com/stephnna/math-magicians',
    modalDescription: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations. Read a random math-related quote.',

  },
  {
    closeButton: 'images/modal-close-button.svg',
    name: 'Space X App',
    description: 'Scientific Space App',
    imageMobile: 'images/spacex_modal.jpg',
    imageDesktop: 'images/spacex_desktop.png',
    rubySkill: 'React',
    cssSkill: 'Redux',
    jsSkill: 'JavaScript',
    htmlSkill: 'Jest',
    CodeKit: 'React',
    gitHub: 'Redux',
    boostrap: 'JavaScript',
    terminal: 'Jest',
    codePen: 'GitFlow',
    seeProject: 'See Project',
    live: 'https://space-amejid-stephen.netlify.app/',
    source: 'https://github.com/amejid/space-travelers-hub',
    modalDescription: 'This web application provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',

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
    <div class="project-image" style="background-image: url(${projects[index].imageMobile});"></div>
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
     <a target='_blank' href="${projects[item.id].live}"><button class="see-btn" type="button">See Live<img src="images/live.svg" alt="see-live-image"></button></a> 
     <a target='_blank' href="${projects[item.id].source}"><button class="see-btn" type="button">See Source <img src="images/github-image.svg" alt="github-image"></button></a>
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
