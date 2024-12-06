document.addEventListener("DOMContentLoaded", () => {
    const scrollToTop = document.getElementById("scrollToTop");
    const animatedElements = document.querySelectorAll(".card, .appointment .image img, .achievements ul li, .blog-card");
  
    // Mostrar/Ocultar botón "Scroll to Top"
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    });
  
    // Scroll hacia arriba
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Efecto de aparición al deslizar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    animatedElements.forEach((el) => {
      el.classList.add("hidden"); // Agregar clase "hidden" inicialmente
      observer.observe(el);
    });
  });
  
  //Carrusel
  document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;
    const imageWidth = carouselTrack.parentElement.clientWidth; // Anchura visible del carrusel
    let currentIndex = 0;
  
    // Función para mover el carrusel
    function moveCarousel() {
      currentIndex = (currentIndex + 1) % totalImages; // Avanza al siguiente índice
      const translateX = -currentIndex * imageWidth; // Calcula el desplazamiento
      carouselTrack.style.transform = `translateX(${translateX}px)`; // Aplica la transformación
    }
  
    // Redimensionar imágenes cuando la ventana cambia de tamaño
    window.addEventListener("resize", () => {
      const translateX = -currentIndex * carouselTrack.parentElement.clientWidth;
      carouselTrack.style.transform = `translateX(${translateX}px)`;
    });
  
    // Configurar el carrusel para desplazarse automáticamente cada 3 segundos
    setInterval(moveCarousel, 3000);
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Obtener el botón "Ver Video"
    const videoBtn = document.getElementById("videoBtn");
  
    // Asignar evento click al botón
    videoBtn.addEventListener("click", () => {
      // Redirigir al enlace de YouTube
      window.open("https://www.youtube.com/@INTRUMENTOSJIMLAB", "_blank");
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todas las preguntas
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      // Seleccionar la respuesta asociada
      const answer = question.nextElementSibling;

      // Mostrar u ocultar la respuesta
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});

// Mostrar el modal al hacer clic en el botón
document.getElementById('openModal').addEventListener('click', () => {
  document.getElementById('modalRegistro').style.display = 'block';
});

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById('modalRegistro');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Evitar redirección al hacer clic en enlaces dentro del formulario
const links = document.querySelectorAll('#modalRegistro a');
links.forEach((link) => {
  link.addEventListener('click', (e) => e.preventDefault());
});

