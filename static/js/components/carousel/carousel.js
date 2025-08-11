document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const track = carousel.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const indicatorsContainer = carousel.querySelector(".carousel__indicators");

    let currentIndex = 0;

    // Crear indicadores dinámicos
    indicatorsContainer.innerHTML = "";
    slides.forEach((_, index) => {
        const button = document.createElement("button");
        button.classList.add("carousel__indicator");
        if (index === 0) button.classList.add("carousel__indicator--active");
        button.setAttribute("role", "tab");
        button.setAttribute("aria-selected", index === 0 ? "true" : "false");
        button.setAttribute("aria-controls", `slide${index + 1}`);
        button.id = `indicator${index + 1}`;
        button.tabIndex = index === 0 ? 0 : -1;

        button.addEventListener("click", () => goToSlide(index));

        indicatorsContainer.appendChild(button);
    });

    // Función para ir a un slide específico
    function goToSlide(index) {
        currentIndex = index;
        const offset = -index * carousel.offsetWidth;
        track.style.transform = `translateX(${offset}px)`;

        // Actualizar indicadores
        const buttons = indicatorsContainer.querySelectorAll("button");
        buttons.forEach((btn, i) => {
            btn.classList.toggle("carousel__indicator--active", i === index);
            btn.setAttribute("aria-selected", i === index ? "true" : "false");
            btn.tabIndex = i === index ? 0 : -1;
        });
    }

    goToSlide(0);

    // Manejo del swipe táctil
    let startX = 0;
    let isSwiping = false;

    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    carousel.addEventListener("touchend", (e) => {
        if (!isSwiping) return;
        isSwiping = false;
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;
        const threshold = 40; // px para detectar swipe

        if (diffX > threshold) {
            // Swipe derecha -> slide anterior
            goToSlide((currentIndex - 1 + slides.length) % slides.length);
        } else if (diffX < -threshold) {
            // Swipe izquierda -> slide siguiente
            goToSlide((currentIndex + 1) % slides.length);
        }
    });
});
