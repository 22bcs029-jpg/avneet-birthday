// Password screen functionality
const passwordScreen = document.getElementById('passwordScreen');
const passwordInput = document.getElementById('passwordInput');
const passwordBtn = document.getElementById('passwordBtn');
const passwordError = document.getElementById('passwordError');
const passwordForm = document.getElementById('passwordForm');
const mainContent = document.getElementById('mainContent');

const CORRECT_PASSWORD = 'avneet0401';

// Password form submission
passwordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkPassword();
});

passwordBtn.addEventListener('click', checkPassword);

function checkPassword() {
  if (passwordInput.value === CORRECT_PASSWORD) {
    // Password correct - unlock
    passwordScreen.classList.add('hidden');
    mainContent.style.display = 'block';
    document.body.style.overflow = 'auto';

    // Start music after a short delay
    setTimeout(() => {
      tryPlayMusic();
    }, 500);
  } else {
    // Password wrong - show error
    passwordError.textContent = 'Oops! Wrong password. Try again 💕';
    passwordInput.value = '';
    passwordInput.style.animation = 'none';
    setTimeout(() => {
      passwordInput.style.animation = 'shake 0.5s ease-in-out';
    }, 10);

    // Clear error after 2 seconds
    setTimeout(() => {
      passwordError.textContent = '';
    }, 2000);
  }
}

// Countdown timer
function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear();
  let targetDate = new Date(currentYear, 0, 4, 0, 0, 0);

  if (now > targetDate) {
    targetDate = new Date(currentYear + 1, 0, 4, 0, 0, 0);
  }

  const difference = targetDate.getTime() - now.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById('countDays').textContent = String(days).padStart(2, '0');
  document.getElementById('countHours').textContent = String(hours).padStart(2, '0');
  document.getElementById('countMinutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('countSeconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown immediately and every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Music player
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;
let musicStarted = false;

musicToggle.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggle.querySelector('.music-icon').textContent = '🔇';
    isPlaying = false;
  } else {
    bgMusic.play();
    musicToggle.querySelector('.music-icon').textContent = '🔊';
    isPlaying = true;
  }
});

function tryPlayMusic() {
  if (!musicStarted) {
    bgMusic.play()
      .then(() => {
        isPlaying = true;
        musicToggle.querySelector('.music-icon').textContent = '🔊';
        musicStarted = true;
      })
      .catch((err) => {
        // Autoplay blocked, will play on user interaction
        console.log('Autoplay blocked. Will play on user interaction.');
      });
  }
}

// Play music on first user interaction
document.addEventListener('click', () => {
  tryPlayMusic();
}, { once: true });

document.addEventListener('keydown', () => {
  tryPlayMusic();
}, { once: true });

document.addEventListener('touch', () => {
  tryPlayMusic();
}, { once: true });

// Video pause/play - pause music when video plays
const videoIframe = document.getElementById('birthdayVideo');
if (videoIframe) {
  videoIframe.addEventListener('play', () => {
    if (isPlaying) {
      bgMusic.pause();
    }
  });

  videoIframe.addEventListener('pause', () => {
    if (isPlaying) {
      bgMusic.play();
    }
  });
}

// Scroll reveal animation
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Lower music volume when viewing emotional sections
      if (entry.target.classList.contains('message-section') ||
          entry.target.classList.contains('letter-section')) {
        bgMusic.volume = 0.3;
      } else if (!entry.target.classList.contains('message-section') &&
                 !entry.target.classList.contains('letter-section')) {
        bgMusic.volume = 0.7;
      }
    }
  });
}, observerOptions);

scrollRevealElements.forEach((el) => {
  observer.observe(el);
});

// Typewriter effect for love letter
const letterContent = document.getElementById('letterContent');
const fullLetter = `My Dearest Avneet,

There are moments in life when words feel too small to hold the depth of what we feel. This is one of those moments. As I write this, I'm reminded of every smile you've given me, every laugh we've shared, and every quiet moment where just being with you felt like home.

You have this incredible way of making the ordinary feel extraordinary. The way your eyes light up when you talk about something you love, the warmth in your voice when you ask about my day, the gentle kindness you show to everyone around you — these are the things that make you so beautifully you.

Your smile isn't just pretty; it's a reminder that good things exist in this world. Your presence doesn't just fill a room; it fills my heart with a peace I never knew I needed. With you, I don't have to pretend or hide. I can just be, and that's enough.

Being with you feels safe. It feels like coming home after a long day. It feels like finding something I didn't know I was searching for. You make my ordinary days special simply by being in them.

On your birthday, I want you to know how deeply you're loved — not just today, but every single day. You deserve all the happiness, all the love, all the beautiful moments life has to offer. And I'm so grateful I get to be part of your story.

I choose you. Always.

Happy Birthday, my Avneet ❤️`;

let currentCharIndex = 0;
let isTyping = false;

function typewriterEffect() {
  if (currentCharIndex < fullLetter.length) {
    const char = fullLetter[currentCharIndex];
    if (char === '\n') {
      letterContent.innerHTML += '<br>';
    } else {
      letterContent.textContent += char;
    }
    currentCharIndex++;
    setTimeout(typewriterEffect, 25);
  }
}

// Start typewriter when letter section is visible
const letterSection = document.querySelector('.letter-section');
if (letterSection) {
  const letterObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isTyping) {
        isTyping = true;
        typewriterEffect();
      }
    },
    { threshold: 0.3 }
  );
  letterObserver.observe(letterSection);
}

// Focus password input on load
window.addEventListener('load', () => {
  passwordInput.focus();
});
