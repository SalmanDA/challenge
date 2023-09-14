const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
let currentIndex = 0;

function showCard(index) {
    testimonialCards.forEach(card => {
        card.style.transform = `translateX(-${index * 100}%)`;
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showCard(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < testimonialCards.length - 1) {
        currentIndex++;
        showCard(currentIndex);
    }
});

// Tampilkan card pertama saat halaman dimuat
showCard(currentIndex);