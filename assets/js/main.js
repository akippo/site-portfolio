// Smooth Scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]'
});

  document.getElementById("header-time").innerHTML = showTime();
  
  function showTime() {
    let now = new Date();
    let start = Date();
    let nowhour = now.getHours();
    let nowminutes = now.getMinutes();
    let nowseconds = now.getSeconds();
  
    let text = nowhour + "：" + nowminutes + "：" + nowseconds; 
    
    return text;
  }
