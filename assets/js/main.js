// Smooth Scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]'
});

  document.getElementById("header-time").innerHTML = showTime();
  
  function showTime() {
    var now = new Date();
    var nowhour = now.getHours();
    var nowminutes = now.getMinutes();
    var nowseconds = now.getSeconds();
  
    var text = nowhour + "：" + nowminutes + "：" + nowseconds; 
    
    return text;
  }
