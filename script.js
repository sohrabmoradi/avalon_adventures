// script.js
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const question = document.getElementById('question').value.trim();

    if (!name || !email || !question) {
        alert('Please fill out all required fields.');
        event.preventDefault();
    } else {
        alert('Thank you for reaching out. We will get back to you soon.');
    }
});
