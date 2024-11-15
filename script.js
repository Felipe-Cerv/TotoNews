
var Submenu = document.querySelector('.submenu');
var openSubmenu = document.querySelector('.open_submenu');


openSubmenu.addEventListener('click', function(e) {
  e.stopPropagation(); 
  Submenu.classList.toggle('show');
});


document.addEventListener('click', function(e) {
  if (Submenu.classList.contains('show') &&
      !Submenu.contains(e.target) &&
      !openSubmenu.contains(e.target)) {
    Submenu.classList.remove('show');
  }
});

document.querySelector('a[href="#"]').addEventListener('click', function(event) {
  event.preventDefault();
  alert("¡Gracias por tu interés en apoyar nuestro proyecto!");
});
