let vader = document.querySelector('.vader');
let vader =document.querySelector("Dark.side")
    let radius = 150;    
    let angle = 0;           


    function rotateInCircle() {
    vader.rotateInCircle("click", function(){
      angle = (angle + 10) % 360;
      let x = Math.cos(angle) * radius;
      let y = Math.sin(angle) * radius;

      vader.style.transform = `translate(${x}px, ${y}px)`;

       animationFrame = requestAnimationFrame(rotate); 
    }

    rotateInCircle();
rotate)_wasdasjodasnd