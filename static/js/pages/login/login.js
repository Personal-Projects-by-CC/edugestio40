document.addEventListener("DOMContentLoaded", () => {
    const login = document.querySelector(".login");
    const loginCarousel = document.querySelector(".login__carousel");
    const loginForm = document.querySelector(".login__form");

    const mediaDesktop = window.matchMedia("(min-width: 1024px)");

    function expandirForm() {
        if (!loginForm.classList.contains("login__form--active")) {
            loginForm.classList.add("login__form--active");

            if (window.innerHeight < 672) {
                login.classList.add("login--no-carousel");
            } else {
                login.classList.remove("login--no-carousel");
            }
        }
    }

    function cerrarForm() {
        if (loginForm.classList.contains("login__form--active")) {
            loginForm.classList.remove("login__form--active");
            login.classList.remove("login--no-carousel");
        }
    }

    function manejarEventos(e) {
        if (e.matches) {
            loginForm.removeEventListener("click", expandirForm);
            loginCarousel.removeEventListener("click", cerrarForm);

            loginForm.classList.remove("login__form--active");
            login.classList.remove("login--no-carousel");

            loginForm.style.height = "";
            login.style.flexDirection = "";
        } else {
            loginForm.addEventListener("click", expandirForm);
            loginCarousel.addEventListener("click", cerrarForm);

            loginForm.style.height = "";
        }
    }

    manejarEventos(mediaDesktop);
    mediaDesktop.addEventListener("change", manejarEventos);
});
