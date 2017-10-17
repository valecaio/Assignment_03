//colors
var colorList = ['#9ba167', '#dc491e','#734b40'];


function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(color('#cedbdb'));
  noStroke();
  
  //first layer
  for(var x = 50; x < 500; x += 50) {
    for(var y= 50; y<500; y+=50)
    {
      if(random()<0.6)
      {   
         var index = floor(random() * colorList.length);
         var colorHex = colorList[index];
         fill(color(colorHex));
      } 
      else {
        
   noFill();
    }
    arc(x,y,50,50,0,180)
    }
  }
  
  //second layer
  for(var x = 50; x < 500; x += 50) {
    for(var y= 50; y<500; y+=50)
    {
      if(random()<0.6)
      {
         var index = floor(random() * colorList.length);
         var colorHex = colorList[index];
         fill(color(colorHex));
         
         arc(x,y,50,50,90,270)
      } 
      else {
        
  noFill();
  }
   }
  }
  
  //third layer
  for(var x = 50; x < 500; x += 50) {
    for(var y= 50; y<500; y+=50)
    {
      if(random()<0.6)
      {
        var index = floor(random() * colorList.length);
        var colorHex = colorList[index];
        fill(color(colorHex));
         
      } 
      else {
        
  noFill();
    }
    arc(x,y,50,50,180,360)
   }
  }
 
}

function draw() {
  }