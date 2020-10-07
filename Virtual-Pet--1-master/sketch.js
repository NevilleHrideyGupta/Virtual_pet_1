//Create variables here
var dog, HappyDog, database, foodS, foodStock;
var dogImage, dogImage1 ;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
dogImage1 = loadImage("images/dogImg1.png");

  
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  var dog = createSprite(100,200);
  dog.addImage(dogImage);
  dog.scale = 0.25;
foodstock = database.ref('Food');
  foodstock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  dog.addImage(dogImage1);
  writeStock(foodS);
  
}
  drawSprites();
  //add styles here
stroke("white");
text("Note Press UP_ARROW key to feed drago milk! ")
textSize(25);
fill("black");
}

// fuction to read values from DB
function readStock(data){
  foodS-data.val();
}

//function to write value in DB
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

