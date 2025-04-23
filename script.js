// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add visible class when element is in the viewport
function handleScrollAnimation() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScrollAnimation);

// Initial check for elements already in viewport on page load
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
