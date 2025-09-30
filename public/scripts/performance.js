// Performance optimization scripts
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload critical images
    const preloadImages = [
      '/Stenth_Logo-removebg.png',
      '/portfolio/stenth-x/cover.png',
      '/portfolio/retail-boost/cover.png',
      '/portfolio/leadgen-saas/cover.png'
    ];

    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });

    // Prefetch likely navigation targets
    const prefetchPages = ['/about', '/services', '/portfolio', '/contact'];
    prefetchPages.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
  });
}

function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

setVH();
window.addEventListener('resize', setVH);
