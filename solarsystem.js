   window.onload = init;

    var mercury = document.getElementById("mercury");
    var venus = document.getElementById("venus");
    var earth = document.getElementById("earth"); 
    var mars = document.getElementById("mars");
    var orbits = document.getElementsByClassName("orbit-view");
    var active = false;
    var info = document.getElementById("info");
    var infocontainer = document.getElementById("info-container");

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
          var image = event.target;
         var src = image.getAttribute("id");
         active=true;
         stopPlaying();
         showInfo(src);
         if (image !== imgsun) {image.style.transform = "translate(-50%,-50%) scale(2)";}
         var planetClass = src.substring(3)+ "-info";
         info.classList.add(planetClass);
         secondclick(planetClass,image);  
        }
    }

        function secondclick(planetClass,image) {
            
            document.addEventListener("mouseup", function(){
            image.style.transform = "translate(-50%,-50%) scale(1)";
             active=false; 
            hideInfo(); 
            startPlaying();
             info.classList.remove(planetClass);
            });
    }

        function hideInfo() {
            infocontainer.style.animation = "info-box-back 1s linear forwards";
            var parameters = document.getElementById("parameters");
            parameters.innerHTML = null;
    var orbitposition = document.getElementsByClassName("orbit-position");                            
        for (var i = 0; i < orbitposition.length;i++){
             orbitposition[i].style.animation = "moveLeft-back 0.5s linear forwards";
        }
}
        
        function showInfo(src) {
            
            var planet = src.substring(3);
            if (planet === "sun"){
              sunParam.showParameters();}
          else if (planet === "mercury"){
              mercuryParam.showParameters();
          }else if (planet === "venus"){
              venusParam.showParameters();
          }else if (planet === "earth"){
              earthParam.showParameters();
          }else if (planet === "mars"){
              marsParam.showParameters();
          } 
            infocontainer.style.animation = "info-box 1s linear forwards";
        var orbitposition = document.getElementsByClassName("orbit-position");
         for (var i = 0; i < orbitposition.length;i++){
             orbitposition[i].style.animation = "moveLeft 0.5s linear forwards";
        }
}

       function stopPlaying(){
        mercury.style.animationPlayState = "paused";
         venus.style.animationPlayState = "paused";
         earth.style.animationPlayState = "paused";
         mars.style.animationPlayState = "paused";              
        for (i = 0; i < orbits.length; i++) {
    orbits[i].style.transform = "rotateY(0)";
     }
}         
     

        function startPlaying(){
         if (active) {
             return false;
            }
        mercury.style.animationPlayState = "running";
         venus.style.animationPlayState = "running";
         earth.style.animationPlayState = "running";
         mars.style.animationPlayState = "running";
         for (i = 0; i < orbits.length; i++){
    orbits[i].style.transform = "perspective(600px) rotateY(35deg) rotateX(35deg)";}
}  

  function Planet (params) {
            this.name = params.name;
            this.mass = params.mass;
            this.diameter = params.diameter;
            this.density = params.density;
            this.rotation = params.rotation;
            this.distance = params.distance;
            this.revolution = params.revolution;
                     
    }
    
    Planet.prototype.showParameters = function(){
       
       
                var parameters = document.getElementById("parameters");
                var header = document.getElementsByTagName("h1");
                var split = this.name.split("");
                var i =0;
             var setinterval = setInterval(function()
                    {  if (i===0){ header[0].innerHTML = "";}  
                     if (i <split.length){header[0].innerHTML +=split[i]; i++} else {stopInterval()} }, 200) ; 
                    
                function stopInterval() {
                    clearInterval(setinterval);
                   
                };
                 if(this.name === "Sun"){
                     parameters.innerHTML = "<br>Mass: " + this.mass + " [10<sup>24</sup> kg]<br>" + " Diameter: " + this.diameter + " km<br>" + " Density: " + this.density + " [kg/m<sup>3</sup>]";
                 }else {       
                
                parameters.innerHTML = "<br>Mass: " + this.mass + " [10<sup>24</sup> kg]<br>" + " Diameter: " + this.diameter + " km<br>" + " Density: " + this.density + " [kg/m<sup>3</sup>]<br>" + " Rotation: " + this.rotation + " hours<br>" + " Distance: " + this. distance + " [10<sup>6</sup> km]<br>" + " Revolution: " + this.revolution + " days";}
                
    }
        
        var sunParameters = {
        name:"Sun",
        mass:"1 988 500",
        diameter:"1 391 016",
        density: 1.408
        }
          var mercuryParameters = {
              name:"Mercury",
              mass:0.3302,
              diameter:4.878,
              density:5.427,
              rotation:1407.6,
              distance:57.9,
              revolution:87.969      
        }
        var venusParameters = {
            name:"Venus",
              mass:4.869,
              diameter:12.100,
              density:5.204,
              rotation:5832.5,
              distance:108.2,
              revolution:224.7
            
        }
        var earthParameters = {
            name:"Earth",
              mass:5.975,
              diameter:12.742,
              density:5.520,
              rotation:23.93,
              distance:149.6,
              revolution:365.25
            
        }
        var marsParameters = {
            name:"Mars",
              mass:0.6419,
              diameter:6.779,
              density:3.933,
              rotation:24.62,
              distance:227.9,
              revolution:686.98
            
        }
    
        
        var mercuryParam = new Planet(mercuryParameters);
        var venusParam = new Planet(venusParameters);
        var earthParam = new Planet(earthParameters);
        var marsParam = new Planet(marsParameters);  
        var sunParam = new Planet(sunParameters); 