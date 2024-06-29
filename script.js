const sliderWrapper = document.getElementById('cardCarousel');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
let currentCard = 0;

const cardShift = () => {
    sliderWrapper.style.transform = `translateX(-${currentCard * 100}%)`;
};

prevButton.addEventListener('click', () => {
    if (currentCard > 0) {
        currentCard--;
        cardShift();
    }
});

nextButton.addEventListener('click', () => {
    if (currentCard < sliderWrapper.children.length - 1) {
        currentCard++;
        cardShift();
    }
});
