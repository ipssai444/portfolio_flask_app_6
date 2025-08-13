/**
 * Main JavaScript file for portfolio interactions
 */
document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation on mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Form validation (basic client-side example)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = contactForm.elements.name;
            const email = contactForm.elements.email;
            const subject = contactForm.elements.subject;
            const message = contactForm.elements.message;

            let formIsValid = true;

            // Clear previous errors
            contactForm.querySelectorAll('.form-error').forEach(errorEl => errorEl.textContent = '');

            // Name validation
            if (!name.value.trim()) {
                formIsValid = false;
                contactForm.querySelector('#name-error').textContent = 'Name is required.';
            }

            // Email validation
            if (!email.value.trim()) {
                formIsValid = false;
                contactForm.querySelector('#email-error').textContent = 'Email is required.';
            } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
                formIsValid = false;
                contactForm.querySelector('#email-error').textContent = 'Please enter a valid email address.';
            }

            // Subject validation
            if (!subject.value.trim()) {
                formIsValid = false;
                contactForm.querySelector('#subject-error').textContent = 'Subject is required.';
            }

            // Message validation
            if (!message.value.trim()) {
                formIsValid = false;
                contactForm.querySelector('#message-error').textContent = 'Message is required.';
            }

            if (!formIsValid) {
                e.preventDefault();
            } else {
                // Show loading indicator
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.querySelector('.btn-text').style.display = 'none';
                submitButton.querySelector('.btn-loading').style.display = 'inline-block';
            }
        });
    }
});