//-START-// collection slider ////////////////////////////////////////////////////////////////////////////////
const sliderWrapper = document.querySelector(
  ".main-collection-container .slider-wrapper"
);
const slider = document.querySelector(".main-collection-container .products");
const previousButton = document.querySelector(
  ".main-collection-container .previous-button"
);
const nextButton = document.querySelector(
  ".main-collection-container .next-button"
);
const sliderProducts = [...slider.children];
var isPaused = false;

const collectionSlider = () => {
  // next slide function

  const getProductsCardWidth = () => {
    const productsCardWidth = document.querySelector(
      ".main-collection-container .product-card-wrapper"
    ).offsetWidth;
    return productsCardWidth;
  };

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
};
collectionSlider();
//-END-// collection slider ////////////////////////////////////////////////////////////////////////////////

//----------------------------------------------------------------------------------------------------------

//-START-// brand slider ///////////////////////////////////////////////////////////////////////////////////
const brandsSliderWrapper = document.querySelector(
  ".main-brands-container .brand-slider-wrapper"
);
const brandsSlider = document.querySelector(".main-brands-container .brands");
const brandsPreviousButton = document.querySelector(
  ".main-brands-container .previous-button-brand"
);
const brandsNextButton = document.querySelector(
  ".main-brands-container .next-button-brand"
);
const sliderBrands = [...brandsSlider.children];
var isPausedBrand = false;

const brandSlider = () => {
  const getBrndsCardWidth = () => {
    const brandsCardWidth = document.querySelector(
      ".main-brands-container  .brand-card-wrapper"
    ).offsetWidth;
    return brandsCardWidth;
  };

  // next slide function
  const nextSlider = () => {
    if (brandsSlider.scrollLeft === 0) {
      brandsSlider.scrollLeft = getBrndsCardWidth();
    } else if (
      Math.floor(brandsSlider.scrollLeft / getBrndsCardWidth()) + 5 >=
      sliderBrands.length
    ) {
      brandsSlider.scrollLeft = 0;
    } else {
      brandsSlider.scrollLeft =
        Math.floor(brandsSlider.scrollLeft / getBrndsCardWidth()) *
          getBrndsCardWidth() +
        getBrndsCardWidth();
    }
  };

  // previous slide function
  const previousSlider = () => {
    if (brandsSlider.scrollLeft === 0) {
      brandsSlider.scrollLeft = sliderBrands.length * getBrndsCardWidth();
    } else {
      brandsSlider.scrollLeft =
        Math.ceil(brandsSlider.scrollLeft / getBrndsCardWidth()) *
          getBrndsCardWidth() -
        getBrndsCardWidth();
    }
  };

  brandsNextButton.addEventListener("click", nextSlider);
  brandsPreviousButton.addEventListener("click", previousSlider);

  window.addEventListener("resize", function () {
    var pageWidth = window.innerWidth;

    brandsSlider.scrollLeft = 0;
    // Your code to handle width change goes here
    console.log(getBrndsCardWidth());
    console.log(pageWidth);
  });

  // const brandSlider = () => {
  //   let intervalId;

  //   const startInterval = () => {
  //     intervalId = setInterval(() => {
  //       nextSlider();
  //     }, 2500);
  //   };

  //   const pauseInterval = () => {
  //     clearInterval(intervalId);
  //   };

  //   startInterval(); // Start the interval initially

  //   brandsSliderWrapper.addEventListener("mouseenter", () => {
  //     isPausedBrand = true;
  //     pauseInterval();
  //   });

  //   brandsSliderWrapper.addEventListener("mouseleave", () => {
  //     isPausedBrand = false;
  //     startInterval();
  //   });
  // };

  // // window load events
  // window.addEventListener("load", (event) => {
  //   brandSlider();
  // });

  //-END-// brand slider ////////////////////////////////////////////////////////////////////////////////
};
brandSlider();
