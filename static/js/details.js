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
