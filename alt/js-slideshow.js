// function createCarousel({ slideSelector = '.carousel-slide' } = {}) {
//     const carouselSlide = document.querySelector(slideSelector);
//     const cards = Array.from(carouselSlide.querySelectorAll('.card'));

//     const nextBtn = carouselSlide.querySelector('#nextBtn');
//     const prevBtn = carouselSlide.querySelector('#prevBtn');

//     let cardIndex = 0;
//     let cardWidth = cards[0].clientWidth + 20; /* 20px is margin-right */

//     function update() {
//         carouselSlide.style.transform = 'translateX(' + (-cardWidth * cardIndex) + 'px)';
//         prevBtn.classList.toggle('inactive', cardIndex === 0);
//         nextBtn.classList.toggle('inactive', cardIndex >= cards.length - getSlideSize());
//     }

//     function getSlideSize() {
//         return window.innerWidth > 1023 ? 4 : 2;
//     }

//     window.addEventListener('resize', () => {
//         cardWidth = cards[0].clientWidth + 20;
//         update();
//     });

//     nextBtn.addEventListener('click', () => {
//         if (cardIndex < cards.length - getSlideSize()) {
//             cardIndex += getSlideSize();
//             update();
//         }
//     });

//     prevBtn.addEventListener('click', () => {
//         if (cardIndex > 0) {
//             cardIndex -= getSlideSize();
//             update();
//         }
//     });

//     update();
// }

// document.addEventListener("DOMContentLoaded", function () {
//     createCarousel({ slideSelector: '.carousel-slide' });
//     // Adicione mais chamadas de função aqui, se necessário
// });



const carouselSlide = document.querySelector('.carousel-slide');
const carouselContainer = document.querySelector('.carousel-container');
const cards = Array.from(document.querySelectorAll('.card'));

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let cardIndex = 0;
let cardWidth = cards[0].clientWidth + 20; /* 20px is margin-right */

function update() {
    carouselSlide.style.transform = 'translateX(' + (-cardWidth * cardIndex) + 'px)';
    prevBtn.classList.toggle('inactive', cardIndex === 0);
    nextBtn.classList.toggle('inactive', cardIndex >= cards.length - getSlideSize());
}

function getSlideSize() {
    return window.innerWidth > 1023 ? 4 : 2;
}

window.addEventListener('resize', () => {
    cardWidth = cards[0].clientWidth + 20;
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
