var container = document.getElementById('container');
var image = document.getElementById('image');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function moveBackground(event) {
  // get mouse x and y position
  var mouseXposition = event.clientX;
  var mouseYposition = event.clientY;
  
  // calculations
  var calculatedX = mouseXposition / (windowWidth / 8);
  var calculatedY = mouseYposition / (windowHeight / 8)
  //adding translate property to the image container
  image.style.transform = "translate(-"+calculatedX.toString()+"%,-"+calculatedY.toString()+"%)"
}

// calling function on mouse move on the first container
container.addEventListener("mousemove", moveBackground)
