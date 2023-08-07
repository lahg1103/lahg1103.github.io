
const birthday = new Date(2003, 3, 11, 0, 0, 0, 0);
const currentday = new Date();

let year = currentday.getFullYear();

let age = currentday.getFullYear() - birthday.getFullYear();

let month = currentday.getMonth() - birthday.getMonth();

var day = currentday.getDate() - birthday.getDate();

if ( month < 0 || month == 0 && day < 0 )
{
    age--;
}

let ageHTML = document.getElementById('age');
ageHTML.innerText = age;


function scrollToProjects() {
    const projectsSection = document.getElementById('projects-section');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
  document.getElementById('scroll-to-project').addEventListener('click', () => {
    scrollToProjects();
  });
  