// === Smooth Scroll for Nav Links ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// === Scroll Reveal Animations ===
const sections = document.querySelectorAll('section');

const revealSection = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      sec.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSection);

// === Header Glow on Scroll ===
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 0 20px #00ff66';
  } else {
    header.style.boxShadow = '0 0 10px #00ff6633';
  }
});

// === Hover Glow on Profile Picture ===
const profilePic = document.querySelector('.download-image');
if (profilePic) {
  profilePic.addEventListener('mouseenter', () => {
    profilePic.style.boxShadow = '0 0 40px #00ff99';
  });
  profilePic.addEventListener('mouseleave', () => {
    profilePic.style.boxShadow = '0 0 15px #00ff66';
  });
}

// === Typing Text Effect (Optional) ===
const text = "Welcome to My Portfolio";
const heading = document.createElement('h1');
heading.classList.add('type-effect');
document.getElementById('home').prepend(heading);

let index = 0;
function typeWriter() {
  if (index < text.length) {
    heading.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// === Dynamic Year (for future footer if you add one) ===
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// === Animate Skills Bars ===
const progressBars = document.querySelectorAll('.progress');

function animateSkillBars() {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !bar.classList.contains('animated')) {
      const target = bar.getAttribute('data-skill');
      bar.style.width = target + '%';
      bar.classList.add('animated');
    }
  });
}

window.addEventListener('scroll', animateSkillBars);