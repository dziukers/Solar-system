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

 /*function Planet (params) {
            
            this.mass = params.mass;
            this.diameter = params.diameter;
            this.density = params.density;
            this.rotation = params.rotation;
            this.distance = params.distance;
            this.revolution = params.revolution;
            
            this.stopAnimation = function(){
                var earthImg = earth();
                var earthAnimation = document.getElementsByClassName("animate-earth");
                earthAnimation.style.animationPlayStyle = "paused";
            }
        }

          var mercuryParameters = {
              mass:0.0553,
              diameter:4880,
              density:5.43,
              rotation:58.81,
              distance:0.387,
              revolution:87.97
              
              
        }
        var venusParameters = {
              mass:0.0553,
              diameter:4880,
              density:5.43,
              rotation:58.81,
              distance:0.387,
              revolution:87.97
            
        }
        var earthParameters = {
              mass:0.0553,
              diameter:4880,
              density:5.43,
              rotation:58.81,
              distance:0.387,
              revolution:87.97
            
        }
        
        var mercury = new Planet(mercuryParameters);
        var venus = new Planet(venusParameters);
        var earth = new Planet(earthParameters);
        
        function planets (){
           var planets = [mercury, venus, earth];
        for (var i = 0; i < planets.length; i++){
            planets[i].onmouseover = planets[i].stopAnimation();
            planets[i].onclick=showPlanetInfo();
        }}
 