// ------------------ Mobile Menu Toggle ------------------
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ------------------ Modal Reservation Form ------------------
const modal = document.getElementById("reservationModal");
const bookBtn = document.getElementById("bookBtn");
const closeBtn = document.querySelector(".close");

bookBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // show modal
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // close modal
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none"; // click outside modal closes it
  }
});

// ------------------ Testimonials Slider ------------------
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide();
}, 3000); // change every 3s

showSlide();

// ------------------ Contact Form ------------------
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Thank you! We have received your message.");
  contactForm.reset();
});
