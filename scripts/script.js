
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


// let lastScrollY = 0;
// const scrollDuration = 800; // Adjust the scroll duration as needed
// const delayDuration = 300; // Adjust the delay duration as needed

// function scrollToProjects() {
//   const greetingSection = document.getElementById('nav-greeting');
//   const projectsSection = document.getElementById('projects-section');
//   const greetingTop = greetingSection.getBoundingClientRect().top + window.scrollY;
//   const projectsTop = projectsSection.getBoundingClientRect().top + window.scrollY;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const scrollY = easeInOutCubic(timeElapsed, window.scrollY, projectsTop - window.scrollY, scrollDuration);
//     window.scrollTo(0, scrollY);

//     // Calculate the opacity for the greeting section based on the scroll progress
//     const scrollProgress = Math.min(1, timeElapsed / scrollDuration);
//     const greetingOpacity = 1 - scrollProgress;
//     greetingSection.style.opacity = greetingOpacity;

//     if (timeElapsed < scrollDuration) requestAnimationFrame(animation);
//   }

//   function easeInOutCubic(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t * t + b;
//     t -= 2;
//     return c / 2 * (t * t * t + 2) + b;
//   }

//   setTimeout(() => {
//     requestAnimationFrame(animation);
//   }, delayDuration);
// }

// function onScroll() {
//   const currentScrollY = window.scrollY;

//   if (currentScrollY > lastScrollY) {
//     // Scrolling down, fade out greeting
//     const greetingSection = document.getElementById('nav-greeting');
//     greetingSection.style.transition = 'opacity 0.3s';
//     greetingSection.style.opacity = 0;
//   } else {
//     // Scrolling up, fade in greeting
//     const greetingSection = document.getElementById('nav-greeting');
//     greetingSection.style.transition = 'opacity 2s';
//     greetingSection.style.opacity = 1;
//   }

//   lastScrollY = currentScrollY;
// }

// window.addEventListener('scroll', onScroll);

// document.getElementById('scroll-to-project').addEventListener('click', () => {
//   scrollToProjects();
// });


function scrollToProjects() {
    const projectsSection = document.getElementById('projects-section');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  function onScroll() {
    const currentScrollY = window.scrollY;
  
    if (currentScrollY > lastScrollY) {
      // Scrolling down, snap to projects section
      const projectsSection = document.getElementById('projects-section');
      const projectsTop = projectsSection.getBoundingClientRect().top + window.scrollY;
      if (projectsTop <= currentScrollY + window.innerHeight) {
        scrollToProjects();
      }
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up, snap to nav-greeting
      const greetingSection = document.getElementById('nav-greeting');
      const greetingTop = greetingSection.getBoundingClientRect().top + window.scrollY;
      if (greetingTop >= currentScrollY) {
        greetingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    lastScrollY = currentScrollY;
  }
  
  window.addEventListener('scroll', onScroll);
  
  document.getElementById('scroll-to-project').addEventListener('click', () => {
    scrollToProjects();
  });
  