document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image');
    const imageContainer = document.querySelector('.image-container');
    
    // Trigger the wave effect when images enter the viewport
    window.addEventListener('scroll', () => {
        const rect = imageContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            imageContainer.style.animation = 'waveEffect 1.5s ease-out forwards';
        }
    });
});
