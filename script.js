document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.image');

  function animateOnScroll() {
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        img.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  // Run on page load as well
  animateOnScroll();
});
