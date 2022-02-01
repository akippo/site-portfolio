// Smooth Scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]'
});

  document.getElementById("header-time").innerHTML = showTime();
  
  function showTime() {
    let now = new Date();
    let start = Date.parse('30 Oct 1990 12:18:00');
    let elapsed = now.getTime() - start.getTime() 
    let nowhour = now.getHours();
    let nowminutes = now.getMinutes();
    let nowseconds = now.getSeconds();
  
    let text = nowhour + "：" + nowminutes + "：" + nowseconds + elapsed; 
    
    return text;
  }
