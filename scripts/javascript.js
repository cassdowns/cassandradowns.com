function SwapDivsWithClick() {
   var d1 = document.getElementById('bio');
   var d2 = document.getElementById('about');
   
   if (d2.style.visibility == 'hidden') {
      d2.style.visibility = 'visible';
      d1.style.visibility = 'hidden';
      fadeOpacity(d1);
      setTimeout(function() {
          fadeOpacity(d2);    
      }, 500);
   } else {
       d2.style.visibility = 'hidden';
       d1.style.visibility = 'visible';
       fadeOpacity(d2);
       setTimeout(function() {
          fadeOpacity(d1);    
      }, 500);
   }
}

function fadeOpacity(el) {
    el.style.opacity = (el.style.opacity == '0' ? '1' : '0');
}

function loadPage () {
   var d1 = document.getElementById('bio');
   var d2 = document.getElementById('about');
    d1.style.visibility = 'visible';
    d2.style.visibility = 'hidden';
    d2.style.opacity = '0';
    d1.style.opacity = '1';
}