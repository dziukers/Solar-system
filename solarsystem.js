   window.onload = init;


        function init(){
    var sun = document.getElementById("sun");
    
    var mercury = document.getElementById("mercury");
    var venus = document.getElementById("venus");
    var earth = document.getElementById("earth"); 
    var mars = document.getElementById("mars");
    var orbits = document.getElementsByClassName("orbit-view");


        sun.addEventListener("mouseover", function(){sun.style.opacity = "1"});
        sun.addEventListener("mouseout", function(){sun.style.opacity = "0.5"});  
  
        mars.addEventListener("mouseover", function()
        {console.log("Ok");
        mercury.style.animationPlayState = "paused";
         venus.style.animationPlayState = "paused";
         earth.style.animationPlayState = "paused";
         mars.style.animationPlayState = "paused";
        for (i = 0; i < orbits.length; i++) {
    orbits[i].style.transform = "rotateY(0)";}});         
     
        mars.addEventListener("mouseout", function()
        {console.log("Ok");
        mercury.style.animationPlayState = "running";
         venus.style.animationPlayState = "running";
         earth.style.animationPlayState = "running";
         mars.style.animationPlayState = "running";
        for (i = 0; i < orbits.length; i++) {
    orbits[i].style.transform = "perspective(600px) rotateY(40deg) rotateX(40deg)";}});  
            
            earth.addEventListener("mouseover", function()
        {console.log("działa");});
    } 
