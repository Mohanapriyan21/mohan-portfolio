// JavaScript file for handling form submission and other interactions

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Perform validation (you can add more validation logic here)
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }
    
    // Simulate form submission (replace this with actual form submission logic)
    alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Clear form fields
    event.target.reset();
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmission);
});
