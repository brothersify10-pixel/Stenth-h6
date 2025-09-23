// Performance optimization scripts
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/Stenth_Logo-removebg.png';
    link.as = 'image';
    document.head.appendChild(link);
  });
}

function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

setVH();
window.addEventListener('resize', setVH);
