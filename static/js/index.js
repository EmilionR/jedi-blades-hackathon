document.getElementById("lightSide").addEventListener("click", function () {
  updateContent(
    "path/to/jedi-logo.png",
    "The Force is strong with you. As a Jedi, you seek peace and justice in the galaxy. Your lightsaber is a symbol of hope, illuminating the path to a brighter future. May the Force be with you, always.",
    "light-mode"
  );
});

document.getElementById("bothSides").addEventListener("click", function () {
  updateContent(
    "path/to/balance-logo.png",
    "Balance is key. You walk the fine line between light and dark, harnessing the powers of both sides of the Force. Your journey is one of equilibrium, seeking harmony in a galaxy divided by conflict.",
    "blend-mode"
  );
});

document.getElementById("darkSide").addEventListener("click", function () {
  updateContent(
    "path/to/sith-logo.png",
    "Power is everything. As a Sith, you embrace the darkness, seeking to dominate the galaxy with your unmatched strength. Your red lightsaber burns with the fire of your ambition, casting fear into the hearts of your enemies.",
    "dark-mode"
  );
});

function updateContent(imgSrc, text, modeClass) {
  const sideLogo = document.getElementById("sideLogo");
  const sideText = document.getElementById("sideText");

  sideLogo.src = imgSrc;
  sideLogo.style.display = "block";
  sideText.innerHTML = text;
  sideText.style.display = "block";
}

// Set blend mode as default
document.querySelector(".select-your-side").className =
  "select-your-side blend-mode";

// Set click events for Light side
document.getElementById("lightSide").addEventListener("click", function () {
  filterSide("L");
});

// Set click events for Balance
document.getElementById("bothSides").addEventListener("click", function () {
  filterSide("both");
});

// Set click events for Dark side
document.getElementById("darkSide").addEventListener("click", function () {
  filterSide("D");
});

function filterSide(side) {
  const cards = document.querySelectorAll(".jedi-card-custom");
  cards.forEach((card) => {
    console.log(card.classList);
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
});
