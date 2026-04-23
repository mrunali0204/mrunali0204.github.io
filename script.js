// Inside script.js or within a <script> tag at the end of body

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const htmlElement = document.documentElement;

// Set default theme on load
if (localStorage.getItem('theme') === 'light') {
    htmlElement.classList.remove('dark');
} else {
    htmlElement.classList.add('dark');
}

function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);


// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll for internal links (already handled by html {scroll-behavior: smooth;})
// This JS is more for illustrative purposes or if browser support is an issue.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Contact Form Submission (Example - In a real scenario, you'd send this to a backend)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending data
    console.log({ name, email, message });

    // Show success message
    formStatus.classList.remove('hidden');
    formStatus.classList.add('text-green-500', 'font-bold', 'animate-pulse');
    formStatus.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Message sent successfully! I\'ll get back to you soon.';

    // Optionally clear the form
    contactForm.reset();

    // Hide message after a few seconds
    setTimeout(() => {
        formStatus.classList.add('hidden');
        formStatus.classList.remove('text-green-500', 'font-bold', 'animate-pulse');
        formStatus.innerHTML = '';
    }, 5000); // Hide after 5 seconds
});
