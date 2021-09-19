var socket;

function setup() {
  createCanvas(600, 600);
  background(100);

  socket = io.connect('http://localhost:3000');
  socket.on ('fromserver', modifyclient);
}

function modifyclient(data){
  noStroke();
  fill(255,0,100);
  ellipse(data.x,data.y,10,10);
   
}

function draw() {
    
}

function mouseDragged(){
  //console.log( "Sending " + mouseX + ',' + mouseY);

  var data ={
    x: mouseX,
    y: mouseY
  }; 
  
  socket.emit('sendmousepos',data);

  noStroke();
  fill(255);

  ellipse(mouseX,mouseY,10,10);

}