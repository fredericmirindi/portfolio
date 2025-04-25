document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // In a real scenario, you would send this data to a server
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // For this example, just show a success message
            formMessage.textContent = 'Message sent successfully!';
            formMessage.classList.remove('hidden');
            contactForm.reset(); // Clear the form
        });
    }

    // You can add more JavaScript for interactive elements here
    // For example, smooth scrolling for navigation links:
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
