// Typing text
const text = "I build for the web.";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text[index];
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once when page loads
window.addEventListener("load", revealOnScroll);

// Button scroll
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


const form = document.getElementById("contact-form");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_irsbu1a",
    "template_04qo1jd",
    this
  ).then(() => {
    statusText.textContent = "Message sent successfully!";
    form.reset();
  }, () => {
    statusText.textContent = "Something went wrong.";
  });
});
