// Floating hearts animation
const heartsContainer = document.getElementById('hearts');
if (heartsContainer) {
  function createHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
    heart.style.fontSize = Math.random() * 10 + 10 + 'px';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
  setInterval(createHeart, 1000);
}

// Fade-in effect
const section = document.querySelector('section');
window.addEventListener('load', () => {
  if (section) section.classList.add('visible');
});
