const buttons = document.querySelectorAll(".button");
const form = document.querySelector("#contForm");
const nameInput = document.querySelector("#name");
const successMessage = document.querySelector("#success-msg");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("thanks ham jald hi ap sy contact karengy");
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    successMessage.textContent = `Thank you, ${name}, for contacting us! We will get back to you soon.`;
    successMessage.style.color = "green";
    form.reset();
});

const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".navbar");

humburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});