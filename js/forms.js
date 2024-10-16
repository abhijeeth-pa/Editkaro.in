// Form Validation and Submission Handling

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!name || !email || !phone || !message) {
        alert('All fields are required.');
        return;
    }

    // Send form data to Google Sheets (requires setup with Google Apps Script)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwH7QHFRZ5NPWoJlqR_SDjOLJI2DNT8TCLEJnQ0Tp5lMEcOctO9NPX-BYfRHP1_fFZU/exec';
    fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
        .then(response => alert('Success!', response))
        .catch(error => alert('Error!', error));
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

