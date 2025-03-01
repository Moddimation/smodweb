document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const bgImg = document.querySelector(".bgImg");
    container.style.opacity = "1"; // Fade in content

    const totalImages = 13;  // Total number of images
    let isScrolling = false;  // To control when to update the background image

    // Function to update the background image dynamically based on scroll position
    function updateBackground() {
        const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const switchEvery = totalScrollableHeight / totalImages; // Distance to scroll to switch images

        const scrollPos = window.scrollY; // Current scroll position
        let imgIndex = Math.floor(scrollPos / switchEvery); // Determine the current image index

        // Clamp the imgIndex to the range [0, totalImages-1]
        imgIndex = Math.max(0, Math.min(imgIndex, totalImages - 1));

        // Build the image URL string dynamically based on the scroll position
        const imagePath = `assets/bg/bg${imgIndex}.png`;

        // Set the background image dynamically
        bgImg.style.backgroundImage = `url(${imagePath})`; // Change background image
    }

    // Use requestAnimationFrame to update background image on scroll
    function onScroll() {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(() => {
                updateBackground();
                isScrolling = false;
            });
        }
    }

    // Add scroll event listener and trigger onScroll function
    window.addEventListener("scroll", onScroll);

    updateBackground();  // Initial update
});

