var scroll = new SmoothScroll('a[href="#content1"]', {
    speed: 1000
});


const chevronButton = document.querySelector("#chevronBtn");
chevronButton.addEventListener("click", removeArrow)


function removeArrow() {
    var lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
       
        if (currentScroll > 0 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
            chevronButton.style.display = "none";
          }else{
            lastScroll = currentScroll;
            chevronButton.style.display = "inline-block";
          }
      };
}

function scrollDetect(){
    var lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
  
        if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          chevronButton.style.display = "none";
        }else{
          lastScroll = currentScroll;
          chevronButton.style.display = "inline-block";
        }
    };
  }
  
  
  scrollDetect();