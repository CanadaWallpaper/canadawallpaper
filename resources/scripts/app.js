const sliderWrapper = document.querySelector(".slider-wrapper");
const slider = document.querySelector(".products");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const sliderProducts = [...slider.children];
var isPaused = false;

const getProductsCardWidth = () => {
  const productsCardWidth = document.querySelector(
    ".product-card-wrapper"
  ).offsetWidth;
  return productsCardWidth;
};

console.log(sliderProducts.length);

// next slide function
const nextSlider = () => {
  if (slider.scrollLeft === 0) {
    slider.scrollLeft = getProductsCardWidth();
  } else if (
    Math.floor(slider.scrollLeft / getProductsCardWidth()) + 5 >=
    sliderProducts.length
  ) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft =
      Math.floor(slider.scrollLeft / getProductsCardWidth()) *
        getProductsCardWidth() +
      getProductsCardWidth();
  }

  console.log();
  console.log(sliderProducts.length);
};

// previous slide function
const previousSlider = () => {
  if (slider.scrollLeft === 0) {
    slider.scrollLeft = sliderProducts.length * getProductsCardWidth();
  } else {
    slider.scrollLeft =
      Math.ceil(slider.scrollLeft / getProductsCardWidth()) *
        getProductsCardWidth() -
      getProductsCardWidth();
  }

  console.log(slider.scrollLeft);
};

nextButton.addEventListener("click", nextSlider);
previousButton.addEventListener("click", previousSlider);

window.addEventListener("resize", function () {
  var pageWidth = window.innerWidth;

  slider.scrollLeft = 0;
  // Your code to handle width change goes here
  console.log(getProductsCardWidth());
  console.log(pageWidth);
});

const productSlider = () => {
  let intervalId;

  const startInterval = () => {
    intervalId = setInterval(() => {
      nextSlider();
    }, 2500);
  };

  const pauseInterval = () => {
    clearInterval(intervalId);
  };

  startInterval(); // Start the interval initially

  sliderWrapper.addEventListener("mouseenter", () => {
    isPaused = true;
    pauseInterval();
  });

  sliderWrapper.addEventListener("mouseleave", () => {
    isPaused = false;
    startInterval();
  });
};

// window load events
window.addEventListener("load", (event) => {
  productSlider();
});
