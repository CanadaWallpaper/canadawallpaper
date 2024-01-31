const slider = document.querySelector(".product-slider");
const nextBtn = document.querySelector(".next-button");
const prevBtn = document.querySelector(".previous-button");
const product = document.querySelectorAll(".product-card");

let product_page = Math.ceil(product.length / 4);
let l = 0;

let movePer = 25;
let maxMove = Math.ceil(product.length - 4) * 25;

let mob_view1024 = window.matchMedia("(max-width: 1024px)");
let mob_view800 = window.matchMedia("(max-width: 800px)");

// Update the movePer and maxMove values for different screen sizes
function updateSliderConfig() {
  if (mob_view800.matches) {
    movePer = 100;
    maxMove = Math.ceil(product.length - 1) * 100;
  } else if (mob_view1024.matches) {
    movePer = 50;
    maxMove = Math.ceil(product.length - 2) * 50;
  } else {
    movePer = 25;
    maxMove = Math.ceil(product.length - 4) * 25;
  }
}

// Automatic slider functionality
let intervalId; // Variable to store the interval ID

function startSlider() {
  intervalId = setInterval(() => {
    right_mover();
  }, 3000); // Adjust the interval duration (e.g., 3000 milliseconds or 3 seconds)
}

function stopSlider() {
  clearInterval(intervalId);
}

// Pause on hover functionality
slider.addEventListener("mouseenter", stopSlider);
slider.addEventListener("mouseleave", startSlider);

// Right and left mover functions
let right_mover = () => {
  l = l + movePer;

  if (l > maxMove) {
    l = 0;
  }

  for (const i of product) {
    i.style.left = "-" + l + "%";
  }
};

let left_mover = () => {
  l = l - movePer;

  if (l < 0) {
    l = maxMove;
  }

  for (const i of product) {
    i.style.left = "-" + l + "%";
  }
};

// Update slider configuration when the window is resized
window.addEventListener("resize", () => {
  updateSliderConfig();
  left_mover(); // Ensure the left_mover reflects the updated configuration
});

// Initial setup
updateSliderConfig();
startSlider(); // Start the automatic slider

// Click event listeners for next and previous buttons
nextBtn.onclick = () => {
  right_mover();
};

prevBtn.onclick = () => {
  left_mover();
};
