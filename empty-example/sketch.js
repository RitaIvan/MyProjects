var diam1=30;

function setup() {
  createCanvas(600, 400);
  background("#003366");
}

function draw() {
   // background("#003366");
    fill(0,105,205);
    stroke(255,255,0);
    strokeWeight(5);
    ellipse(300,200,diam1,diam1); 
    //fill(255,0,0,175);
    rect(random(width),random(height),random(width),random(height));
    diam1=diam1+5; //increase the size witha user defined variable
// if(diam1>200){
//        diam1=30;
//    }
//    else{
//      diam1=diam1+5;  
//    }
//adding text
//    fill(0,200,200);
//    strokeWeight(3);
//    textSize(60);
//    textFont("Arial");
//    textStyle(ITALIC);
//    textAlign(LEFT);
//    text("wow!!!",50,300);
// new mouse location ellipse
    //ellipse(mouseX,mouseY,30,30);
}

function mousePressed(){
   diam1=diam1+5; //to increase size constantly beyond the cancas
//    if(diam1>300){
//        diam1=30;
//    }
//    else{
//      diam1=diam1+5;  
//    }
}