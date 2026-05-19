
document.addEventListener('DOMContentLoaded', function() {
    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.1});
    
    // Elements to animate
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
      observer.observe(element);
    });
  });