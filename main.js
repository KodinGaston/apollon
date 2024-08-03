document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.menu a');
  let timeoutId;

  const showMenu = () => {
      nav.classList.add('hold-blink');
      menu.style.display = 'block';
      clearTimeout(timeoutId); // Clear any existing timeout
  };

  const hideMenu = () => {
      nav.classList.remove('hold-blink');
      menu.style.display = 'none';
  };

  function setHideMenuTimeout() {
        clearTimeout(timeoutId); // Clear any existing timeout
        timeoutId = setTimeout(() => {
            hideMenu();
        }, 500); // Hide menu after 5 seconds
    }

  // For mouse events
  nav.addEventListener('mouseover', showMenu);
  nav.addEventListener('mouseout', setHideMenuTimeout);

  // For touch events
  nav.addEventListener('touchstart', showMenu);
  document.addEventListener('touchend', (event) => {
      // Hide menu if touch ended outside of nav
      if (!nav.contains(event.target)) {
          setHideMenuTimeout();
      }
  });

  // Handle menu item click
  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          setHideMenuTimeout(); // Start the timeout to hide menu after click
      });
  });
});
 
    document.addEventListener('DOMContentLoaded', function() {
        const highlights = document.querySelectorAll('.highlight');

        highlights.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                applyDistortion(e, el);
            });

            el.addEventListener('touchmove', (e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado de desplazamiento táctil
                applyDistortion(e, el);
            });
        });

        function applyDistortion(e, el) {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calcula la distorsión en función del movimiento
            const offsetX = (x - centerX) / centerX;
            const offsetY = (y - centerY) / centerY;

            // Aplicar transformaciones para simular hundimiento
            el.style.transform = `perspective(600px) rotateX(${offsetY * 10}deg) rotateY(${offsetX * 10}deg)`;
            el.style.boxShadow = `0 ${offsetY * 10}px ${offsetY * 20}px rgba(0, 0, 0, 0.3)`;

            // Opcional: Para el borde
            el.querySelector('::before').style.transform = `translateZ(-10px)`;
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        const interactiveElements = document.querySelectorAll('.highlight, .grid-item, .column, .square');
    
        function applyDistortion(e, el) {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
    
            // Calcula la distorsión en función del movimiento
            const offsetX = (x - centerX) / centerX;
            const offsetY = (y - centerY) / centerY;
    
            // Aplicar transformaciones para simular hundimiento
            el.style.transform = `perspective(600px) rotateX(${offsetY * 10}deg) rotateY(${offsetX * 10}deg)`;
            el.style.boxShadow = `0 ${offsetY * 10}px ${offsetY * 20}px rgba(0, 0, 0, 0.3)`;
    
            // Opcional: Para el borde
            if (el.querySelector('::before')) {
                el.querySelector('::before').style.transform = `translateZ(-10px)`;
            }
        }
    
        function resetEffect(el) {
            el.style.transform = 'perspective(600px) rotateX(0) rotateY(0)';
            el.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0.3)';
            if (el.querySelector('::before')) {
                el.querySelector('::before').style.transform = 'translateZ(0)';
            }
        }
    
        // Verificar si el dispositivo tiene soporte para puntero de tipo mouse
        const hasMouse = window.matchMedia('(pointer: fine)').matches;
    
        interactiveElements.forEach(el => {
            if (hasMouse) {
                el.addEventListener('mousemove', (e) => {
                    applyDistortion(e, el);
                });
    
                el.addEventListener('mouseleave', () => {
                    resetEffect(el);
                });
            } else {
                // En dispositivos táctiles, evitamos el efecto
                el.addEventListener('touchmove', (e) => {
                    e.preventDefault(); // Evita el comportamiento predeterminado de desplazamiento táctil
                    // No aplicamos el efecto de distorsión
                });
    
                el.addEventListener('touchend', () => {
                    resetEffect(el);
                });
            }
        });
    });
    

    


