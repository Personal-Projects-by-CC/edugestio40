document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    const linkToRegister = document.querySelector(".register-toggle");
    const linkToLogin = document.querySelector(".login-toggle");

    // Mostrar sólo login al inicio
    loginForm.classList.add("login__form--active");
    registerForm.classList.remove("login__form--active");

    linkToRegister.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("login__form--active");
        registerForm.classList.add("login__form--active");
    });

    linkToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.classList.remove("login__form--active");
        loginForm.classList.add("login__form--active");
    });
});
