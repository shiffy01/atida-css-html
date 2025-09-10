document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-more-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const paragraph = button.previousElementSibling;
            paragraph.classList.toggle("show");

            if (paragraph.classList.contains("show")) {
                button.textContent = "Read Less";
            } else {
                button.textContent = "Read More";
            }
        });
    });
});
