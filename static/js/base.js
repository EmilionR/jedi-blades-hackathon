// Navbar toggler
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.getElementById("burger").classList.toggle("active");
  });

// Sound effects
document.addEventListener("DOMContentLoaded", function () {
  let hoverSaber = document.querySelectorAll(".hovered");
  let hoverClash = document.querySelectorAll(".lightsaber");

  // Array of sound file URLs
  const lightsaberSounds = [
    "static/sounds/lightsaber-1.mp3",
    "static/sounds/lightsaber-2.mp3",
    "static/sounds/lightsaber-3.mp3",
    "static/sounds/lightsaber-4.mp3",
  ];
  const clashSound = "../sounds/saber-clash";

  // Index to keep track of the current sound
  let currentIndex = 0;

  for (item of hoverSaber) {
    item.addEventListener("mouseenter", function () {
      // Create a new audio element
      let audio = new Audio(lightsaberSounds[currentIndex]);

      // Play the current sound
      audio
        .play()
        .then(function () {
          console.log("Audio played successfully");
        })
        .catch(function (error) {
          console.error("Failed to play audio:", error);
        });

      // Update the index to the next sound in a round-robin fashion
      while (true) {
        let randomIndex = Math.floor(Math.random() * lightsaberSounds.length);
        if (randomIndex !== currentIndex) {
          currentIndex = randomIndex;
          break;
        }
      }
    });
  }
});
