var bgImg
var jerry
var tom
var jerryImg
var jerryImg2
var jerrImg3
var tomImg
var tomImg2
var tomImg3



function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    jerryImg=loadAnimation("mouse1.png")
    jerryImg2=loadAnimation("mouse2.png" , "mouse3.png")
    jerryImg3=loadAnimation("mouse4.png")
    tomImg=loadAnimation("cat1.png")
    tomImg2=loadAnimation("cat2.png" , "cat3.png")
    tomImg3=loadAnimation("cat4.png")

}

function setup(){
    createCanvas(1000,800);
jerry = createSprite(200,600);
jerry.addAnimation("jerry", jerryImg);
jerry.scale=0.15
tom = createSprite(870,600);
tom.addAnimation("tom", tomImg);
tom.scale=0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x < (tom.width-jerry.width)/2) {
tom.velocityX=0
tom.addAnimation("tomlastImage" , tomImg3);
tom.x=300
tom.changeAnimation("tomlastImage" , tomImg3);
jerry.addAnimation("jerrylastImage" , jerryImg3);
jerry.changeAnimation("jerrylastImage" , jerryImg3);
} 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.velocityX=-5
tom.addAnimation("tomRunning" , tomImg2);
tom.changeAnimation("tomRunning" , tomImg2);
jerry.addAnimation("jerryTeasing" , jerryImg2);
jerry.changeAnimation("jerryTeasing" , jerryImg2);
jerry.frameDelay = 25 

}

}
