
// UM CAROUSEL SIMPLES, SE FOR PARA TER MAIS DO QUE UM POR PAGINA É NECESSÁRIO ALTERAR O CODIGO
function setupCarousel(carouselContainerSelector) {
    const carouselContainer = document.querySelector(carouselContainerSelector);
    const carouselSlide = carouselContainer.querySelector('.carousel-container');
    const cards = Array.from(carouselContainer.querySelectorAll('.carousel-item'));

    const nextBtn = carouselContainer.querySelector('.carousel #nextBtn');
    const prevBtn = carouselContainer.querySelector('.carousel #prevBtn');

    let cardIndex = 0;
    let cardWidth = cards[0].clientWidth;

    function update() {
        carouselSlide.style.transform = `translateX(${(-cardWidth * cardIndex)}px)`;
        prevBtn.classList.toggle('inactive', cardIndex === 0);
        nextBtn.classList.toggle('inactive', cardIndex >= cards.length - getSlideSize());
    }

    function getSlideSize() {
        return window.innerWidth > 1023 ? 4 : 2;
    }

    window.addEventListener('resize', () => {
        cardWidth = cards[0].clientWidth;
        update();
    });

    nextBtn.addEventListener('click', () => {
        if (cardIndex < cards.length - getSlideSize()) {
            cardIndex += getSlideSize();
            update();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (cardIndex > 0) {
            cardIndex -= getSlideSize();
            update();
        }
    });

    update();
}

//setupCarousel('.carousel');