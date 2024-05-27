// Navbar toggler

// Sound effects
document.addEventListener("DOMContentLoaded", function () {
  let hoverSaber = document.querySelectorAll(".sfx");

  // Arrays of sound file URLs
  const swingSounds = [
    "/static/sounds/lightsaber-1.mp3",
    "/static/sounds/lightsaber-2.mp3",
    "/static/sounds/lightsaber-3.mp3",
    "/static/sounds/lightsaber-4.mp3",
  ];
  const clashSounds = [
    "/static/sounds/clash-1.mp3",
    "/static/sounds/clash-2.mp3",
    "/static/sounds/clash-3.mp3",
  ];

  // Index to keep track of the current sound
  let swingIndex = { index: 0 };
  let clashIndex = { index: 0 };

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
    let audio = new Audio(soundList[currentIndex.index]);

    // Set the volume to a lower level
    audio.volume = 0.01;

    // Play the current sound
    audio.play();
  }

  hoverSaber.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      playSound(swingSounds, swingIndex);
    });

    item.addEventListener("click", function () {
      playSound(clashSounds, clashIndex);
    });
  });
});

// Cookie Functions

// Function to accept cookies and hide the modal
function acceptCookies() {
  try {
    localStorage.setItem("cookieConsent", "true");
    let myModal = bootstrap.Modal.getInstance(
      document.getElementById("cookieConsentModal")
    );
    myModal.hide(); // Hide the modal after consent
  } catch (error) {
    console.error("Failed to accept cookies or hide the modal:", error);
  }
}

// Function to check if cookie consent is already given
function checkCookieConsent() {
  if (!localStorage.getItem("cookieConsent")) {
    let cookieModal = new bootstrap.Modal(
      document.getElementById("cookieConsentModal")
    );
    cookieModal.show();
  }
}

// Add event listener to hide modal and record consent when clicking outside the modal
document
  .getElementById("cookieConsentModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      acceptCookies(); // Treat clicks on the modal backdrop as consent
    }
  });

// Initialize cookie check when document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  try {
    checkCookieConsent();
  } catch (error) {
    console.error("Failed to check cookie consent:", error);
  }
});

// Fallback in case Modal instance is not properly retrieved
document
  .getElementById("cookieConsentModal")
  .addEventListener("hidden.bs.modal", function () {
    if (!localStorage.getItem("cookieConsent")) {
      localStorage.setItem("cookieConsent", "true");
    }
  });

// Add a listener for escape key to close modal
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    try {
      let myModal = bootstrap.Modal.getInstance(
        document.getElementById("cookieConsentModal")
      );
      myModal.hide();
      localStorage.setItem("cookieConsent", "true");
    } catch (error) {
      console.error("Failed to close modal with escape key:", error);
    }
  }
});

// Initialize cookie check when document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  checkCookieConsent();
});

document.addEventListener("DOMContentLoaded", function () {
  // Define the background music
  let bgAudio = new Audio("/static/sounds/theme-song.mp3");
  bgAudio.loop = true; // Enable looping
  bgAudio.volume = 0.15; // Set a reasonable volume

  // Function to toggle music play/pause
  function toggleMusic() {
    let toggleButton = document.getElementById("toggle-music");
    let icon = toggleButton.querySelector("i");
    if (bgAudio.paused) {
      bgAudio.play();
      icon.className = "fa-solid fa-volume-high";
    } else {
      bgAudio.pause();
      icon.className = "fa-solid fa-volume-xmark";
    }
  }

  // Event listener for the music control button
  document
    .getElementById("toggle-music")
    .addEventListener("click", toggleMusic);

  // Optional: Autoplay policy may prevent audio from auto-playing without user interaction
  bgAudio.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );

  checkCookieConsent();
});

// Cursor

const cursor = document.querySelector(".cursor");

const positionElement = (e) => {
  const mouseY = e.clientY - 10;
  const mouseX = e.clientX + 5;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", positionElement);
