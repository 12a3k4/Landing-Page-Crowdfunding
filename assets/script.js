let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('nav');
let scrollTopButton = document.querySelector('#scroll-top');

// Toggle menu and navbar visibility on menu click
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('hidden'); // Use Tailwind's hidden class for visibility toggle
});

// Adjust navbar and scroll-top button based on scroll position
window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.add('hidden');

  if (window.scrollY > 60) {
    scrollTopButton.classList.remove('hidden');
    scrollTopButton.classList.add('flex'); // Use Tailwind's flex class to display
  } else {
    scrollTopButton.classList.remove('flex');
    scrollTopButton.classList.add('hidden');
  }
});
