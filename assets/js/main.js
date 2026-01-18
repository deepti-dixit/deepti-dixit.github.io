
document.addEventListener('DOMContentLoaded', () => {

  // ===== ACTIVE NAV LINK =====
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation.split('/').pop()) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ===== CONTACT FORM VALIDATION =====
  const contactForm = document.getElementById('contactForm');

  if(contactForm){
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let valid = true;

      // Name validation
      if(name.value.trim() === ''){
        alert('Please enter your name.');
        valid = false;
        return;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(email.value.trim())){
        alert('Please enter a valid email.');
        valid = false;
        return;
      }

      // Message validation
      if(message.value.trim() === ''){
        alert('Please enter your message.');
        valid = false;
        return;
      }

      if(valid){
        // Success feedback
        alert('Message sent successfully!');
        contactForm.reset();
      }
    });
  }

  // ===== SMOOTH SCROLL (OPTIONAL) =====
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});

// Dynamic copyright year
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// menu toggle

  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open'); // toggle hamburger animation
  });


// emailjs
document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("IkMI3BfRTUBU-5vPy");

  const form = document.getElementById("contact-form");
  const btn = document.getElementById("sendBtn");
  const timeField = document.getElementById("time");

  if (!form) return;

  let isSending = false;
  timeField.value = new Date().toLocaleString();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (isSending) return;
    isSending = true;
    btn.disabled = true;
    btn.innerText = "Sending...";

    // send mail
    emailjs.sendForm(
      "service_tcxmd5a",
      "template_85kvyvh",
      form
    ).then(() => {

      // Auto reply mail
      return emailjs.sendForm(
        "service_tcxmd5a",
        "template_02yu9ot",
        form
      );

    }).then(() => {

      alert("Message sent successfully ✅");
      form.reset();

    }).catch((err) => {
      console.error(err);
      alert("Failed ❌");
    }).finally(() => {
      isSending = false;
      btn.disabled = false;
      btn.innerText = "Send";
    });

  });

});
