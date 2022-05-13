const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamBurger.addEventListener('click', () => {
  hamBurger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});


const project1 = {
  name: 'Project 1',
  description: 'Multi-Post Stories<br>Gain+Glory',
  image: '',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
};

const project2 = {
  name: 'Project 2',
  description: 'Multi-Post Stories<br>Gain+Glory',
  image: '',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
};

const project3 = {
  name: 'Project 3',
  description: 'Multi-Post Stories<br>Gain+Glory',
  image: '',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
};

const project4 = {
  name: 'Project 4',
  description: 'Multi-Post Stories<br>Gain+Glory',
  image: '',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
};

const project5 = {
  name: 'Project 5',
  description: 'Multi-Post Stories<br>Gain+Glory',
  image: '',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
  live: 'https://stephnna.github.io/portfolio/',
  source: 'https://github.com/stephnna/portfolio',
};


const projects = [project1, project2, project3, project4, project5];



const sectionElement = document.getElementById("projects-container");
const projectsContainer = document.createElement("div");
const projectName = document.createElement("h3");

sectionElement.appendChild(projectsContainer);
sectionElement.className = "container-recent";
projectsContainer.id = "multi-post-id";
projectsContainer.className = "grid-project";

const multiPostElement = projectsContainer.cloneNode(true);
const multiPostElementChild = document.getElementById("multi-post-id");
multiPostElementChild.appendChild(multiPostElement);
multiPostElement.id =  "multiPostChildId";
multiPostElement.className = "multi-post";
projectName.innerHTML =   "Multi-Post Stories" + "<br />" + "Gain+Glory";
projectName.id =  "multi-text-id";
projectName.className = "multi-text-color";
document.getElementById("multiPostChildId").appendChild(projectName );

ulLanguage = document.createElement("ul");
document.getElementById("multiPostChildId").appendChild(ulLanguage);
ulLanguage.className = ("language display-flex");
ulLanguage.id = "ul-tech-id"
listItem = document.createElement("li");
document.getElementById("ul-tech-id").appendChild(listItem);
listItem.className = "language-background";
listItem.innerHTML = "Ruby on rails";
listItemSecond = listItem.cloneNode(true);
document.getElementById("ul-tech-id").appendChild(listItemSecond);
listItemSecond.innerHTML = "css";
listItemthird = listItem.cloneNode(true);
document.getElementById("ul-tech-id").appendChild(listItemthird);
listItemthird.innerHTML = "JavaScript";
listItemfourth = listItem.cloneNode(true);
document.getElementById("ul-tech-id").appendChild(listItemfourth);
listItemfourth.innerHTML = "html";

seeProjectButton = document.createElement("button");
seeProjectButton.innerHTML = "See Project";
seeProjectButton.className = "see-project";
seeProjectButton.id = "button-id";
document.getElementById("multiPostChildId").appendChild(seeProjectButton);
document.getElementById("button-id").setAttribute("type", "button"); 



for(i = 0; i < projects.length; i++){
  const gridProject = document.getElementById("multi-post-id").cloneNode(true);
  document.getElementById("projects-container").appendChild(gridProject);
  projectName.innerHTML = projects[i].description;
  // seeProjectButton.addEventListener("click", displayDate); 
  }

//  document.getElementById("button-id").addEventListener("click", displayDate);
// gridProject.

// function displayDate() {
//   console.log("cliked");
// }



