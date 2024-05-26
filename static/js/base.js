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

// Cookie Functions 

// Function to display the cookie consent modal if needed
function checkCookieConsent() {
  if (!localStorage.getItem('cookieConsent')) {
      // Create a new modal instance and show it
      var myModal = new bootstrap.Modal(document.getElementById('cookieConsentModal'), {
          backdrop: 'static',  // Prevents closing the modal by clicking outside it
          keyboard: false       // Prevents closing the modal with the keyboard
      });
      myModal.show();
  }
}

// Function to accept cookies and hide the modal
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'true');
  var myModal = bootstrap.Modal.getInstance(document.getElementById('cookieConsentModal'));
  myModal.hide(); // Hide the modal after consent
}

// Add event listener to hide modal and record consent when clicking outside the modal
document.getElementById('cookieConsentModal').addEventListener('click', function(event) {
  if (event.target === this) {
      acceptCookies(); // Treat clicks on the modal backdrop as consent
  }
});

// Initialize cookie check when document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  checkCookieConsent();
});


document.addEventListener("DOMContentLoaded", function() {
  // Define the background music
  let bgAudio = new Audio('static/sounds/theme-song.mp3');
  bgAudio.loop = true; // Enable looping
  bgAudio.volume = 0.2; // Set a reasonable volume

  // Function to toggle music play/pause
  function toggleMusic() {
      if (bgAudio.paused) {
          bgAudio.play();
          document.getElementById('toggle-music').textContent = 'Pause Star Wars Music';
      } else {
          bgAudio.pause();
          document.getElementById('toggle-music').textContent = 'Play Star Wars Music';
      }
  }

  // Event listener for the music control button
  document.getElementById('toggle-music').addEventListener('click', toggleMusic);

  // Optional: Autoplay policy may prevent audio from auto-playing without user interaction
  bgAudio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);

  checkCookieConsent();
});

