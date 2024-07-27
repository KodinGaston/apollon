document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');

  nav.addEventListener('mouseover', () => {
      nav.classList.add('hold-blink');
  });

  nav.addEventListener('mouseout', () => {
      nav.classList.remove('hold-blink');
  });
});


  