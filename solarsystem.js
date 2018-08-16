   window.onload = init;

    var mercury = document.getElementById("mercury");
    var venus = document.getElementById("venus");
    var earth = document.getElementById("earth"); 
    var mars = document.getElementById("mars");
    var eachPlanet = [mercury,venus,earth,mars];

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

 

        function init(){
            
        imgsun.addEventListener("mouseover", function(){imgsun.style.opacity = "1"});
        imgsun.addEventListener("mouseout", function(){imgsun.style.opacity = "0.7"}); 
  
        solarsystem.addEventListener("mouseover",stopPlaying);
        solarsystem.addEventListener("mouseout",startPlaying);
            
         var eachPlanetImg = [imgsun,imgmercury,imgvenus,imgearth,imgmars];
            
        eachPlanetImg.forEach(function(i){
                i.addEventListener("click",planetActivate);
                
            })

            
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
        
    function showInfo(src) {
        infocontainer.style.opacity = 1;
        infocontainer.style.transform = 'scale(1)';
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
       
    var orbitposition = document.getElementsByClassName("orbit-position");
     for (var i = 0; i < orbitposition.length;i++){
         orbitposition[i].style.animation = "moveLeft 0.5s linear forwards";
    }
}
        function secondclick(planetClass,image) {
            
            window.addEventListener("mouseup", function(){
            image.style.transform = "translate(-50%,-50%) scale(1)";
            active=false; 
            hideInfo(); 
            startPlaying();
            info.classList.remove(planetClass);
            });
    }

        function hideInfo() {
            infocontainer.style.opacity = 0;
            infocontainer.style.transform = 'scale(0)';
            
    var orbitposition = document.getElementsByClassName("orbit-position");                            
        for (var i = 0; i < orbitposition.length;i++){
             orbitposition[i].style.animation = "moveLeft-back 0.5s linear forwards";
        }
        
}


       function stopPlaying(){
           eachPlanet.forEach(function(i){
               i.style.animationPlayState = "paused";
           })  ;           
        for (i = 0; i < orbits.length; i++) {
    orbits[i].style.transform = "rotateY(0)";
     }
}         
     
        function startPlaying(){
         if (active) {
             return false;
            }
         eachPlanet.forEach(function(i){
               i.style.animationPlayState = "running";
           })  ;   
         for (i = 0; i < orbits.length; i++){
    orbits[i].style.transform = "perspective(600px) rotateY(35deg) rotateX(35deg)";}
}  

  function Planet (params) {
            this.name = params.name;
            this.mass = params.mass;
            this.diameter = params.diameter;
            this.namedfor = params.namedfor;
            this.orbit = params.orbit;
            this.day = params.day;
                     
    }
    
    Planet.prototype.showParameters = function(){
       
                var parameters = document.getElementById("parameters");
                var header = document.getElementsByTagName("h1")[0];

                header.innerHTML = this.name;

                 if(this.name === "Sun"){
                     parameters.innerHTML = "<br>Mass: " + this.mass + " [10<sup>24</sup> kg]<br>" + " Diameter: " + this.diameter + " km<br>" + " Density: " + this.density + " [kg/m<sup>3</sup>]";
                 }else {       
                
                parameters.innerHTML = 'Named for: ' + this.namedfor + '<br>' + "<br>Mass: " + this.mass + " [10<sup>24</sup> kg]<br>" + " Diameter: " 
                + this.diameter + " km<br>" + 'Orbit: ' + this.orbit + '<br>' + 'Day: ' + this.day;}
                
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
              namedfor: 'Messenger of the Roman gods', 
              orbit: '88 Earth days',
              day: '58.6 Earth days'        
        }
        var venusParameters = {
            name:"Venus",
              mass:4.869,
              diameter:12.100,
              namedfor: 'Roman goddess of love and beauty', 
              orbit: '225 Earth days',
              day: '241 Earth days'   
            
        }
        var earthParameters = {
            name:"Earth",
              mass:5.975,
              diameter:12.742,
              orbit: '365.24 days',
              day: '23 hours, 56 minutes '  
            
        }
        var marsParameters = {
            name:"Mars",
              mass:0.6419,
              diameter:6.779,
              namedfor: 'Roman god of war', 
              orbit: '687 Earth days',
              day: '24 hours, 37 minutes' 
            
        }
    
        
        var mercuryParam = new Planet(mercuryParameters);
        var venusParam = new Planet(venusParameters);
        var earthParam = new Planet(earthParameters);
        var marsParam = new Planet(marsParameters);  
        var sunParam = new Planet(sunParameters); 