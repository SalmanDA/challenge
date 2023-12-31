const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
let currentIndex = 0;

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

function showCard(index) {
    testimonialCards.forEach((card, i) => {
        card.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (currentIndex > 0) {
        currentIndex--;
        showCard(currentIndex);
    }
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (currentIndex < testimonialCards.length - 1) {
        currentIndex++;
        showCard(currentIndex);
    }
});

showCard(currentIndex);