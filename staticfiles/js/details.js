document.addEventListener("DOMContentLoaded", () => {
  const starsWrapper = document.getElementById("stars-wrapper");
  const starsCount = 100;
  const stars = [];

  for (let i = 0; i < starsCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 2 + 1 + "s";
    starsWrapper.appendChild(star);
    stars.push(star);
  }

  const elements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right"
  );

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("active");
    }, index * 300);
  });
});

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
