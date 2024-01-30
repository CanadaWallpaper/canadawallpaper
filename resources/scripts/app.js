// // slider
// document.addEventListener('DOMContentLoaded', function () {
//     const slider = document.querySelector('.product-cards');
//     const cards = document.querySelectorAll('.product-card');
//     const prevBtn = document.querySelector('.previous-button');
//     const nextBtn = document.querySelector('.next-button');

//     let currentIndex = 0;
//     const cardWidth = cards[0].offsetWidth + 20; // Consider margin for card spacing
//     let autoSlideInterval;

//     function updateSlider() {
//         const translateXValue = -currentIndex * cardWidth + 'px';
//         slider.style.transform = `translateX(${translateXValue})`;
//     }

//     function nextSlide() {
//         currentIndex++;
//         if (currentIndex > cards.length - 4) {
//             currentIndex = 0;
//         }
//         updateSlider();
//     }

//     function prevSlide() {
//         currentIndex--;
//         if (currentIndex < 0) {
//             currentIndex = cards.length - 4;
//         }
//         updateSlider();
//     }

//     // Set up event listeners for manual navigation
//     prevBtn.addEventListener('click', prevSlide);
//     nextBtn.addEventListener('click', nextSlide);

//     // Auto slide every 3 seconds
//     autoSlideInterval = setInterval(() => {
//         nextSlide();
//     }, 3000);

//     // Pause auto slide on hover and resume on mouse leave
//     slider.addEventListener('mouseenter', () => {
//         clearInterval(autoSlideInterval);
//     });

//     slider.addEventListener('mouseleave', () => {
//         autoSlideInterval = setInterval(() => {
//             nextSlide();
//         }, 3000);
//     });

//     // Initial setup
//     updateSlider();
// });

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.product-cards');
    const cards = document.querySelectorAll('.product-card');
    const prevBtn = document.querySelector('.previous-button');
    const nextBtn = document.querySelector('.next-button');

    let currentIndex = 0;
    let cardWidth = calculateCardWidth(); // Initial setup

    function calculateCardWidth() {
        return window.innerWidth > 1024 ? (window.innerWidth <= 800 ? cards[0].clientWidth + 40 : cards[0].clientWidth + 20) : cards[0].clientWidth + 20;
    }

    function updateSlider() {
        const translateXValue = -currentIndex * cardWidth + 'px';
        slider.style.transform = `translateX(${translateXValue})`;
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex > cards.length - 3) { // Show 3 cards at a time
            currentIndex = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 3; // Show 3 cards at a time
        }
        updateSlider();
    }

    function handleResponsiveStyles() {
        cardWidth = calculateCardWidth();
        updateSlider();
    }

    // Set up event listeners for manual navigation
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto slide every 3 seconds
    const autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000);

    // Pause auto slide on hover and resume on mouse leave
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        const autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 3000);
    });

    // Handle responsive styles on window resize
    window.addEventListener('resize', handleResponsiveStyles);

    // Initial setup
    updateSlider();
});
