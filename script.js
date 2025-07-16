// Define your color stages
const colors = [
  'rgba(0, 123, 255, 0.7)',   // Blue
  'rgba(40, 167, 69, 0.7)',   // Green
  'rgba(255, 193, 7, 0.7)',   // Yellow
  'rgba(220, 53, 69, 0.7)',   // Red
  'rgba(108, 117, 125, 0.7)'  // Gray
];

// Define solid colors for scrolled state (optional)
const colorsSolid = [
  'rgba(0, 123, 255, 1)',
  'rgba(40, 167, 69, 1)',
  'rgba(255, 193, 7, 1)',
  'rgba(220, 53, 69, 1)',
  'rgba(108, 117, 125, 1)'
];

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollY = window.scrollY;

  // Calculate scroll percentage (0 → 1)
  const scrollPercent = scrollY / maxScroll;

  // Divide scroll range into segments based on colors array
  const segments = colors.length;
  const segmentSize = 1 / segments;
  
  let index = Math.floor(scrollPercent / segmentSize);

  if (index >= colors.length) {
    index = colors.length - 1;
  }
  
  if (scrollY > 50) {
    navbar.style.backgroundColor = colorsSolid[index];
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  } else {
    navbar.style.backgroundColor = colors[index];
    navbar.style.boxShadow = 'none';
  }
});
