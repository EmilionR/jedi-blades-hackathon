// Set click events for Light side
document.getElementById("lightSide").addEventListener("click", function () {
  updateContent(
    "https://res.cloudinary.com/dxr4xewpz/image/upload/v1716761680/jedi-l_xdmeic.png",
    "The Force is strong with you. As a Jedi, you seek peace and justice in the galaxy. Your lightsaber is a symbol of hope, illuminating the path to a brighter future. May the Force be with you, always.",
    "light-mode"
  );
  filterSide("L");
});

// Set click events for Balance
document.getElementById("bothSides").addEventListener("click", function () {
  updateContent(
    "https://res.cloudinary.com/dxr4xewpz/image/upload/v1716809823/blanace_xb5p8b.png",
    "Balance is key. You walk the fine line between light and dark, harnessing the powers of both sides of the Force. Your journey is one of equilibrium, seeking harmony in a galaxy divided by conflict.",
    "blend-mode"
  );
  filterSide("both");
});

// Set click events for Dark side
document.getElementById("darkSide").addEventListener("click", function () {
  updateContent(
    "https://res.cloudinary.com/dxr4xewpz/image/upload/v1716762102/sith-l_zkgnuw.png",
    "Power is everything. As a Sith, you embrace the darkness, seeking to dominate the galaxy with your unmatched strength. Your red lightsaber burns with the fire of your ambition, casting fear into the hearts of your enemies.",
    "dark-mode"
  );
  filterSide("D");
});

function updateContent(imgSrc, textContent, mode) {
  const sideLogo = document.getElementById("sideLogo");
  const sideText = document.getElementById("sideText");
  const sideContent = document.getElementById("sideContent");

  // Update image source and make it visible
  sideLogo.src = imgSrc;
  sideLogo.style.display = "block";

  // Update text content and make it visible
  sideText.textContent = textContent;
  sideText.style.display = "block";

  // Update mode (e.g., light-mode, dark-mode)
  sideContent.className = `row d-flex justify-content-center align-items-center ${mode}`;
}

function filterSide(side) {
  const cards = document.querySelectorAll("article");
  cards.forEach((card) => {
    if (side === "both") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(side) ? "block" : "none";
    }
  });
}

// Starry Sky Animation for Hero Section
document.addEventListener("DOMContentLoaded", function () {
  const starrySky = document.querySelector(".starry-sky");
  const starsCount = 300;

  for (let i = 0; i < starsCount; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 50 + "vh";

    // Increase the minimum and maximum duration for slower animation
    let duration = Math.random() * (250 - 5) + 5;
    star.style.animationDuration = duration + "s";

    starrySky.appendChild(star);
  }
  const animateLightsaberCards = () => {
    const lightsaberCards = document.querySelectorAll(".lightsaber-card");
    lightsaberCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.3}s`;
      card.classList.add("active");
    });
  };

  animateLightsaberCards();
});
