/******** PASSWORD + UNLOCK ********/
const passwordScreen = document.getElementById("passwordScreen");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const mainContent = document.getElementById("mainContent");

const CORRECT_PASSWORD = "avneet0401";

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (passwordInput.value === CORRECT_PASSWORD) {
    passwordScreen.style.display = "none";
    mainContent.style.display = "block";
    document.body.style.overflow = "auto";

    setTimeout(() => {
      tryPlayMusic();
    }, 400);
  } else {
    passwordError.textContent = "Oops! Wrong password 💕";
    passwordInput.value = "";

    setTimeout(() => {
      passwordError.textContent = "";
    }, 2000);
  }
});

/******** COUNTDOWN ********/
function updateCountdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 0, 4, 0, 0, 0);

  if (now > target) {
    target = new Date(now.getFullYear() + 1, 0, 4, 0, 0, 0);
  }

  const diff = target - now;

  document.getElementById("countDays").textContent =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countHours").textContent =
    Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("countMinutes").textContent =
    Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countSeconds").textContent =
    Math.floor((diff / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

/******** MUSIC ********/
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let musicStarted = false;
let isPlaying = false;

bgMusic.volume = 0.4;

function tryPlayMusic() {
  if (!musicStarted) {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicStarted = true;
    }).catch(() => {});
  }
}

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
  } else {
    bgMusic.play();
    isPlaying = true;
  }
});

/******** VIDEO → MUSIC STOP ********/
const video = document.getElementById("birthdayVideo");
if (video) {
  video.addEventListener("play", () => {
    bgMusic.pause();
    isPlaying = false;
  });
}

/******** SCROLL REVEAL ********/
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll(".scroll-reveal")
  .forEach((el) => observer.observe(el));

/******** TYPEWRITER LETTER ********/
const letterContent = document.getElementById("letterContent");

const letterText = `My Dearest Avneet,

There are moments when words feel too small…
but my feelings for you never are.

You make my ordinary days beautiful.
You make my chaos calm.
You feel like home.

I choose you.
Always.

Happy Birthday ❤️`;

let i = 0;
function typeLetter() {
  if (i < letterText.length) {
    letterContent.textContent += letterText[i++];
    setTimeout(typeLetter, 30);
  }
}

const letterSection = document.querySelector(".letter-section");
new IntersectionObserver((e) => {
  if (e[0].isIntersecting) typeLetter();
}, { threshold: 0.3 }).observe(letterSection);
