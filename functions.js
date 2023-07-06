function typeWriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => 
        setTimeout(() => (element.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(element), 8000);
}

element = document.getElementById("titulo");
typeWriter(element);

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