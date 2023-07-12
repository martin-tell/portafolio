function typeWriter(element) {
  const textArray = element.getAttribute("data-text").split('');
  element.innerHTML = '';
  let i = 0;

  const interval = setInterval(() => {
    if (i < textArray.length) {
      element.innerHTML += textArray[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 95);
}

const titulo = document.getElementById("titulo");
const subti_yo = document.getElementById("yo");
const subti_habilidades = document.getElementById("habilidades");
const subti_proyectos =  document.getElementById("proyectos");

const options = {
  root: null, // Observar el viewport
  rootMargin: "0px", // Sin margen adicional
  threshold: 0.5 // Cuando el 50% del elemento sea visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typeWriter(entry.target);
      textElement.innerHTML = "";
      observer.unobserve(entry.target); // Dejar de observar el elemento una vez que se active el efecto
    }
  });
}, options);

observer.observe(titulo);
observer.observe(subti_yo);
observer.observe(subti_habilidades);
observer.observe(subti_proyectos);


// Obtener todas las etiquetas <a> con href que comienzan con '#'
const enlaces = document.querySelectorAll('a[href^="#"]');

// Escuchar el evento click en cada enlace
enlaces.forEach(enlace => {
  enlace.addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    const seccionId = this.getAttribute('href'); // Obtener el ID de la sección a la que apunta el enlace
    const seccion = document.querySelector(seccionId); // Obtener la sección

    if (seccion) {
      const navbarHeight = document.getElementById('header').offsetHeight; // Obtener la altura de la navbar
      const seccionOffsetTop = seccion.offsetTop; // Obtener la posición superior de la sección

      // Ajustar el desplazamiento teniendo en cuenta la altura de la navbar
      window.scrollTo({
        top: seccionOffsetTop - navbarHeight,
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  });
});