var track, trackImg;
var boy, running, boy2;
var rightGround, leftGround;
var edges;
var power_load, power;

function preload(){
  //pre-load images
  trackImg = loadImage("path.png")
  running = loadAnimation("Runner-1.png", "Runner-2.png")
  power_load = loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200)
  track.addImage(trackImg)
  track.velocityY = 4
  track.scale = 1.6

  leftGround = createSprite(390,200,10,400)
  leftGround.visible = false

  rightGround = createSprite(10,200,10,400)
  rightGround.visible = false

  boy = createSprite(180,340,30,30)
  boy.addAnimation("running", running)
  boy.scale = 0.08

  boy2 = createSprite(300,100,30,30)
  boy2.addAnimation("running", running)
  boy2.scale = 0.08

  power = createSprite(100,75,30,30)
  power.addAnimation("power", power_load)
  power.scale = 0.25
  power.rotation += -30
}

function draw() {
  background('white');

  boy.x = World.mouseX
  

  edges= createEdgeSprites();
  boy.collide(edges);
  boy.collide(leftGround)
  boy.collide(rightGround)

  if(track.y > 400)
  {
    track.y = height/2
  }

  drawSprites()

  
}
