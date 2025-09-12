document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    emailInput.addEventListener("input", () => {
        emailError.style.display = "none";
    });

    form.addEventListener("submit", (e) => {
        const emailValue = emailInput.value.trim();

        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            e.preventDefault();
            emailError.style.display = "block"; 
            emailInput.focus();
        }
    });
});
