let indexValue = 1;

// Initialize the slider
showImg(indexValue);

// Function to show the next or previous image
function changeSlide(step) {
    showImg(indexValue += step);
}

// Function to display the current image
function showImg(index) {
    const images = document.querySelectorAll('.images img');

    if (images.length === 0) return; // Graceful handling if no images

    // Wrap around to the first or last image
    if (index > images.length) indexValue = 1;
    if (index < 1) indexValue = images.length;

    // Hide all images
    images.forEach(image => (image.style.display = "none"));

    // Display the current image
    images[indexValue - 1].style.display = "block";
}

// Add event listeners for the forward and back buttons
document.getElementById('prev-btn').addEventListener('click', () => changeSlide(-1));
document.getElementById('next-btn').addEventListener('click', () => changeSlide(1));
