// Get the navbar element
const navbar = document.getElementById('navbar');

// Add event listener to detect scroll
window.addEventListener('scroll', () => {
    // Check if the page is scrolled
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll behavior
const scrollLinks = document.querySelectorAll('#navbar a');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the target section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
