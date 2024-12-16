const scroller = document.getElementById('profile-scrooler');

// Clone the first profile-container and append it to the end
document.addEventListener('DOMContentLoaded', () => {
    const firstContainer = document.querySelector('.profile-container');
    const clone = firstContainer.cloneNode(true);
    scroller.appendChild(clone);

    autoScroll(); // Start the auto-scroll
});

// Scroll speed (pixels per frame)
const scrollSpeed = 1;

// Scroll automatically and infinitely
function autoScroll() {
    // Increment scrollLeft by the defined speed
    scroller.scrollLeft += scrollSpeed;

    // Reset scrollLeft to 0 when the first half is completely scrolled
    if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
        scroller.scrollLeft = 0;
    }

    // Keep the scroll running
    requestAnimationFrame(autoScroll);
}
