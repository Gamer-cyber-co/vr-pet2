var dogImg1, happyDog1, database, foodS, foodStock;
var FeedDog,feeddog,addFood,addFoods,lastFed;

function preload()
{
 dog = loadImage("images/dogImg.png")
 happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

 dog1 = createSprite(200,200);
 dog1.addImage(dog);
 dog1.scale=0.2

  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  feedButton=createButton("Feed the Dog");
  feedButton.position(450,95);
  feedButton.mousePressed(FeedDog);

  addFoodButton=createButton("Add Food");
  addFoodButton.position(550,95);
  addFoodButton.mousePressed(addFoods);

  foodObj=new Food()
}


function draw() {  

  background("white")

  foodObj.display();

  drawSprites();

  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,100);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}
function readStock(data){
  foodS=data.val();
  console.log(foodS);
}
function writeStock(x){

if(x<=0){
  x=0
}else{
  x=x-1
}

  database.ref('/').update({
    Food:x
  })
fill(255,255,254);
textSize(15);
if (lastFed>=12) {
  text("last Feed : "+ lastFed%12 + "PM", 350,30);
}else if (lastFed==0) {
  text("last Feed : 12 AM",350,30);
}else{
  text("last Feed : "+ lastFed + "AM", 350,30);
}

}
function feeddog() {
if (foodS<=0) 
    foodS=0;
    else
    foodS=foodS-1;
database.ref('/').update({})  

Food:foodS

}

function addFoods() {
  foodS++;
  database.ref('/').update({
    Food:foodS
  });
  happyDog1.addImage(happyDog)
}





