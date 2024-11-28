
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









const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const intervalTime = 7000; // 7 seconds
let autoSlide = setInterval(nextSlide, intervalTime);

function updateCarousel() {
  const offset = -currentIndex * 100; // Each item is 100% wide
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

// Add click events to buttons
nextButton.addEventListener('click', () => {
  clearInterval(autoSlide);
  nextSlide();
  autoSlide = setInterval(nextSlide, intervalTime);
});

prevButton.addEventListener('click', () => {
  clearInterval(autoSlide);
  prevSlide();
  autoSlide = setInterval(nextSlide, intervalTime);
});




      // URL del endpoint de la API
      const API_URL = 'https://tu-servidor.com/api/clima'; // Cambiar a tu endpoint real

      // Función para obtener datos del clima de Culiacán
      async function fetchWeatherData(city) {
          try {
              const response = await fetch(API_URL);
              if (!response.ok) throw new Error('Error al obtener datos de la API');
              
              const data = await response.json();

              // Filtrar datos para la ciudad especificada
              const cityWeather = data.find(entry => entry.nmun === city);
              if (cityWeather) {
                  updateUI(cityWeather);
              } else {
                  console.error('No se encontraron datos para la ciudad especificada.');
              }
          } catch (error) {
              console.error('Error al obtener datos del clima:', error);
          }
      }

      // Función para actualizar la interfaz
      function updateUI(weather) {
          document.getElementById("temperature").textContent = `${parseFloat(weather.tmax).toFixed(0)}°`;
          document.getElementById("description").textContent = weather.desciel;
          document.getElementById("min-max").textContent = `H: ${parseFloat(weather.tmax).toFixed(0)}° L: ${parseFloat(weather.tmin).toFixed(0)}°`;
      }

      // Llamar a la función con "Culiacán" como ciudad
      fetchWeatherData('Culiacán');








