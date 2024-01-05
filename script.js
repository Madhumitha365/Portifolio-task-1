// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Image slideshow in the hero section
const slideshowImages = document.querySelectorAll('#hero .hero-content');
const intervalTime = 5000; // Change slide every 5 seconds
let slideIndex = 0;

function nextSlide() {
  slideshowImages[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slideshowImages.length;
  slideshowImages[slideIndex].classList.add('active');
}

setInterval(nextSlide, intervalTime);
// Contact form submission
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');

contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  submitButton.disabled = true;

  // Replace the following code with your actual form submission logic
  // For demonstration purposes, it simply logs the form data to the console
  const formData = new FormData(contactForm);
  const formDataObject = Object.fromEntries(formData);
  console.log(formDataObject);

  // Display a success message
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  successMessage.style.color = 'green';
  contactForm.appendChild(successMessage);
}
