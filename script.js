// Toggle icon menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
      });
      document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
    }
  });
// Sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
};

// Remove toggle when navlink is cliked
// Assuming you have a click event listener on your navbar links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.content p, .about-content', { origin: 'right' });

// Typed js
const typed = new Typed('.multiple-text', {
  strings: ['Frontend DEveloper','Graphic Designer','Web Designer'],
  typespeed:100,
  backspeed:100,
});