document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    // Hide all sections except the home section
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Display the target section
            document.getElementById(target).style.display = 'block';
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const formData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

        // Store the data in a file named contacted.txt
        const fileData = formData + '\n\n';
        const blob = new Blob([fileData], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'contacted.txt';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        alert(`Thank you for your message, ${name}!`);
        
        // Clear the form fields
        document.getElementById('contact-form').reset();
    });

    const themeToggle = document.getElementById('theme-switch');
    const themeLabel = document.getElementById('theme-label');

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            themeLabel.textContent = 'Light Theme';
        } else {
            document.body.classList.remove('dark-theme');
            themeLabel.textContent = 'Dark Theme';
        }
    });
});
