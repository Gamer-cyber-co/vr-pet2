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

  feed=createButton("Feed the Dog");
  feed.position(450,95);
  feed.mousePressed(FeedDog);

  addFood=createButton("Add Food");
  addFood.position(550,95);
  addFood.mousePressed(addFoods);
}


function draw() {  

  background("white")

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog1.addImage(happyDog)
}

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
  dog.addImage(happyDog1);

  Foodobj.updateFoodStock(Foodobj.getFoodStock()-1);
  database.ref('/').update({
    Food:Foodobj.getFoodStock(),
    FoodTime:hour()
  })
}
function addFoods() {
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}





