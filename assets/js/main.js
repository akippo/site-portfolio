// Smooth Scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]'
});

  document.getElementById("header-time").innerHTML = showTime();
  
  function showTime() {
    let now = Date.now();
    let start = Date.parse('1990-10-30T12:18:00');
    let elapsed = now - start;
    const seconds = Math.floor(elapsed/1000)%60;
    const minutes = Math.floor(elapsed/1000/60)%60;
    const hours = Math.floor(elapsed/1000/3600);
  
    let text = hours + "時間";
    
    return text;
  }
