// Smooth Scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]'
});

  document.getElementById("top-time-hours").innerHTML = showTimeHours();
  function showTimeHours() {
    let now = Date.now();
    let start = Date.parse('1990-10-30T12:18:00');
    let elapsed = now - start;
    const seconds = Math.floor(elapsed/1000)%60;
    const minutes = Math.floor(elapsed/1000/60)%60;
    const hours = Math.floor(elapsed/1000/3600);
  
    let text = hours;
    
    return text;
  }

document.getElementById("top-time-minutes").innerHTML = showTimeMinutes();
function showTimeMinutes() {
  let now = Date.now();
  let start = Date.parse('1990-10-30T12:18:00');
  let elapsed = now - start;
  const seconds = Math.floor(elapsed/1000)%60;
  const minutes = Math.floor(elapsed/1000/60);

  let text = minutes;

  return text;
}

document.getElementById("top-time-seconds").innerHTML = showTimeSeconds();
function showTimeSeconds() {
  let now = Date.now();
  let start = Date.parse('1990-10-30T12:18:00');
  let elapsed = now - start;
  const seconds = Math.floor(elapsed/1000);

  let text = seconds;

  return text;
}