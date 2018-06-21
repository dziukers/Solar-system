   window.onload = init;

    var mercury = document.getElementById("mercury");
    var venus = document.getElementById("venus");
    var earth = document.getElementById("earth"); 
    var mars = document.getElementById("mars");
    var orbits = document.getElementsByClassName("orbit-view");
    var active = 0;
    var info = document.getElementById("info");

    var imgsun = document.getElementById("imgsun");
    var imgmercury = document.getElementById("imgmercury");
    var imgvenus = document.getElementById("imgvenus");
    var imgearth = document.getElementById("imgearth"); 
    var imgmars = document.getElementById("imgmars");
    var solarsystem = document.getElementById("solarsystem");
    var imgsettings = document.getElementsByClassName("img-setting");

        function init(){
            
        
        imgsun.addEventListener("mouseover", function(){imgsun.style.opacity = "1"});
        imgsun.addEventListener("mouseout", function(){imgsun.style.opacity = "0.7"}); 
  
        solarsystem.addEventListener("mouseover",stopPlaying);
        solarsystem.addEventListener("mouseout",startPlaying); 
         
        imgsun.addEventListener("click",planetActivate); 
        imgmercury.addEventListener("click",planetActivate); 
        imgvenus.addEventListener("click", planetActivate);
        imgearth.addEventListener("click", planetActivate);
        imgmars.addEventListener("click", planetActivate);
            
            function planetActivate(event){
        {console.log("działa");
          var image = event.target;
         var src = image.getAttribute("id");
         console.log(src);
         active=1;
         stopPlaying();
         showInfo();
         if (image !== imgsun) {image.style.transform = "translate(-50%,-50%) scale(2)";}
         var planetClass = src.substring(3)+ "-info";
         info.classList.add(planetClass);
         secondclick(planetClass,image);  }}
}
        function secondclick(planetClass,image) {
            
            document.addEventListener("mouseup", function(){
            image.style.transform = "translate(-50%,-50%) scale(1)";
             active=0; 
            hideInfo(); 
            startPlaying();
             info.classList.remove(planetClass);

         });
        }

        function hideInfo() {
            info.style.animation = "info-box-back 1s linear forwards";             
    var orbitposition = document.getElementsByClassName("orbit-position");                            
        for (var i = 0; i < orbitposition.length;i++){
             orbitposition[i].style.animation = "moveLeft-back 0.5s linear forwards";
       }}
        
        function showInfo() {
            info.style.animation = "info-box 1s linear forwards";
        var orbitposition = document.getElementsByClassName("orbit-position");
         for (var i = 0; i < orbitposition.length;i++){
             orbitposition[i].style.animation = "moveLeft 0.5s linear forwards";
        }}

       function stopPlaying()
        {console.log("Ok");
        mercury.style.animationPlayState = "paused";
         venus.style.animationPlayState = "paused";
         earth.style.animationPlayState = "paused";
         mars.style.animationPlayState = "paused";              
        for (i = 0; i < orbits.length; i++) {
    orbits[i].style.transform = "rotateY(0)";
     }}         
     

        function startPlaying()
        {console.log("Ok");
         if (active===1) {
             return false;
         }
        mercury.style.animationPlayState = "running";
         venus.style.animationPlayState = "running";
         earth.style.animationPlayState = "running";
         mars.style.animationPlayState = "running";
         for (i = 0; i < orbits.length; i++){
    orbits[i].style.transform = "perspective(600px) rotateY(35deg) rotateX(35deg)";}};  
            
 /* function Planet (params) {
            
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
 */