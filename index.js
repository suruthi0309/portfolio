// Smooth scrolling for anchor links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target section id
    const targetElement = document.getElementById(targetId);

    // Scroll to the target element with smooth behavior
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Offset to avoid header overlap
      behavior: 'smooth'
    });
  });
});

// Show a popup when clicking the "Download Resume" button
const resumeBtn = document.querySelector('.resume-btn');

resumeBtn.addEventListener('click', function() {
  alert('Downloading Resume...');
});

// Optional: Add a scroll to top button functionality (if you want it)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

// Show or hide the "scroll to top" button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
