
// Initialize slideIndex variable with value 1
var slideIndex = 1;
// Call showSlides function with initial value of slideIndex
showSlides(slideIndex);

// Function to go to the next or previous slide based on input argument
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display slides and dots based on input argument
function showSlides(n) {
    var i;
    // Get all elements with class "slide"
    var slides = document.getElementsByClassName("slide");
    // Get all elements with class "dot"
    var dots = document.getElementsByClassName("dot");

    // If there is only one slide, hide the dots and navigation buttons
    if (slides.length <= 1) {
        var dotsContainer = document.getElementsByClassName("dots-container")[0];
        var prevButton = document.getElementsByClassName("prev")[0];
        var nextButton = document.getElementsByClassName("next")[0];
        dotsContainer.style.display = "none";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }

    // If n is greater than number of slides, set slideIndex to 1
    if (n > slides.length) { slideIndex = 1 }
    // If n is less than 1, set slideIndex to the number of slides
    if (n < 1) { slideIndex = slides.length }
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    // Add "active" class to the current dot
    dots[slideIndex - 1].className += " active";
    // Add transition effect to the current slide
    slides[slideIndex - 1].style.transition = "opacity 2s";
    slides[slideIndex - 1].style.opacity = 1;
    slides[slideIndex - 1].style.height = "auto";

    // Get the slideshow container element
    var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
    // Set the height of the slideshow container to the height of the current slide
    slideshowContainer.style.height = slides[slideIndex - 1].offsetHeight + "px";
}

// Initialize slideInterval variable
var slideInterval;

// Function to start the slideshow
function startSlideshow() {
    // Set interval for calling plusSlides function every 8 seconds
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 8000);
}

// Add touch event listeners to the slideshow container
var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
slideshowContainer.addEventListener("touchstart", handleTouchStart, false);
slideshowContainer.addEventListener("touchmove", handleTouchMove, false);

// Variables to keep track of touch events
var xDown = null;
var yDown = null;

// Handle touch start event
function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

// Handle touch end event
function handleTouchEnd(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.changedTouches[0].clientX;
    var yUp = evt.changedTouches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
        if (xDiff > 0) {
            /* left swipe */
            plusSlides(1);
        } else {
            /* right swipe */
            plusSlides(-1);
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}