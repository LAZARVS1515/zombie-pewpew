// obtain game engine variable
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//fntcn callls
var welcome
var game
//maps
var map,mapRest
//characters
var c1,c2,c3,c4
//guns
var pistol1,pistol2
var ak1,ak2
var sniper1,sniper2
var tommy1,tommy2
//logo and bg
var logo
var bg2forfirst

var gameState = "Login"
// Preload function to declare all the assets before rendering.
function preload() {
  map = loadImage("mape.png")
  mapRest = loadImage("mapSprite_above_teams.png")

c1 = loadImage("/Assets/h1.png")

c2 = loadImage("/Assets/h2.png")

c3 = loadImage("/Assets/h3.png")

c4 = loadImage("/Assets/h4.png")

pistol1 = loadImage("pistol.png")
pistol2 = loadImage("pistol_down.png")

ak1 = loadImage("ak.png")
ak2 = loadImage("akdown.png")

sniper1 = loadImage("sniper2.png")
sniper2 = loadImage("sniper.png")

tommy1 = loadImage("tommy.png")
tommy2 = loadImage("tommy_down.png")

logo = loadImage("/Assets/zombie_logo.png")
bg2forfirst = loadImage("/Assets/this.jpg")
}

function setup() {
    // create a base canvas
    createCanvas(displayWidth,displayHeight);

    // Initialize game engine and gameworld;
    engine = Engine.create();
    world = engine.world;



//sprite making
/*c10 = createSprite(20,50,15,28)   
c10.addImage("hasjdyasyidhasudtasyhauwidta",c1)    
c10.scale = 1.5

c20 = createSprite(40,50,15,28)   
c20.addImage("hasjdyasyidhasudtasyhauidta",c2)
c20.scale = 1.5

c30 = createSprite(60,50,15,28)   
c30.addImage("hasjdyayidhasudtasyhauidta",c3) 
c30.scale = 1.5   
    
c40 = createSprite(80,50,15,28)   
c40.addImage("hasjdyasyidhasudtasyhauidta",c4)    
c40.scale = 1.5
*/
}

function draw() {
    background(bg2forfirst);
    game = new Game()

    Engine.update(engine);

    if (gameState === "Login"){
     game.start()
    }

    if(gameState === "play"){
      game.play()
    }

    //c10
 /*   if (keyDown("w")) {
      c10.y -= 10;
      
    }

    if (keyDown("a")) {
      c10.x -= 5;
    }

    if (keyDown("d")) {
      c10.x += 5;
    }
    
    if (keyDown("s")) {
      c10.y += 10;
    }

//c20
   if(keyDown("w")){
    c20.y -= 10
   }

   if(keyDown("a")){
    c20.x -= 5
   }

   if(keyDown("d")){
    c20.x += 5
   }

   if(keyDown("s")){
    c20.y += 10
   }

   //c30
   if(keyDown("w")){
    c30.y -= 10
   }

   if(keyDown("a")){
    c30.x -= 5
   }

   if(keyDown("d")){
    c30.x += 5
   }

   if(keyDown("s")){
    c30.y += 10
   }

   //c40
   if(keyDown("w")){
    c40.y -= 10
   }

   if(keyDown("a")){
    c40.x -= 5
   }

   if(keyDown("d")){
    c40.x += 5
   }

   if(keyDown("s")){
    c40.y += 10
   }
*/ 
    drawSprites();
}
