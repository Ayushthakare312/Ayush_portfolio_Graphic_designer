// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let currentSlideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slides img');
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

// Initialize the first slide as active
document.querySelector('.slides img').classList.add('active');
