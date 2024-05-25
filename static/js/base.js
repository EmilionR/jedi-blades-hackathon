// Navbar toggler
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.getElementById("burger").classList.toggle("active");
  });

// Sound effects
document.addEventListener("DOMContentLoaded", function () {
  let hoverSaber = document.querySelectorAll(".sfx");

  // Arrays of sound file URLs
  const swingSounds = [
    "static/sounds/lightsaber-1.mp3",
    "static/sounds/lightsaber-2.mp3",
    "static/sounds/lightsaber-3.mp3",
    "static/sounds/lightsaber-4.mp3",
  ];
  const clashSounds = [
    "static/sounds/clash-1.mp3",
    "static/sounds/clash-2.mp3",
    "static/sounds/clash-3.mp3",
  ];

  // Index to keep track of the current sound
  let swingIndex = {index: 0};
  let clashIndex = {index: 0};

  // Function to play the sound
  function playSound(soundList, currentIndex) {

    // Update the index to a different sound in a round-robin fashion
    while (true) {
      let randomIndex = Math.floor(Math.random() * soundList.length);
      if (randomIndex !== currentIndex.index) {
        currentIndex.index = randomIndex;
        break;
      }
    }

    // Select the sound to play
    audio = new Audio(soundList[currentIndex.index]);

    // Play the current sound
    audio.play();
  }

  for (item of hoverSaber) {
    item.addEventListener("mouseenter", function () {
      playSound(swingSounds, swingIndex);
    });

    item.addEventListener("click", function () {
      // Play the sound
      playSound(clashSounds, clashIndex);
    });
  }
});
