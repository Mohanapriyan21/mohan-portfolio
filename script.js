document.addEventListener('DOMContentLoaded', function () {
    const zoomImgs = document.querySelectorAll('.zoom-img');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    document.body.appendChild(overlay);

    // Function to toggle zoomed state and display overlay
    function toggleZoom(event) {
        const zoomImg = event.target;
        if (zoomImg.classList.contains('zoomed')) {
            zoomImg.classList.remove('zoomed');
            overlay.style.display = 'none';
        } else {
            zoomImg.classList.add('zoomed');
            overlay.style.display = 'block';
            const imgSrc = zoomImg.getAttribute('src');
            overlay.style.backgroundImage = `url(${imgSrc})`;
        }
    }

    // Attach click event listener to each zoom image
    zoomImgs.forEach(zoomImg => {
        zoomImg.addEventListener('click', toggleZoom);
    });

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
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmission);
});
