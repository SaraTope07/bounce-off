var rectangle1 ,rectangle2

function setup() {
  createCanvas(1200,800);
  rectangle1 = createSprite(400, 200, 50, 50);
  rectangle2 = createSprite(400,120,50,50);
  rectangle3 = createSprite(200,320,50,50);
  rectangle4 = createSprite(500,800,50,50);
  rectangle5 = createSprite(100,150,50,50);
  rectangle6 = createSprite(500,100,50,50);
  rectangle1.shapeColor="blue";
  rectangle2.shapeColor="blue";
  rectangle1.debug=true;
  rectangle2.debug=true;
  rectangle4.velocityY=-3;
  rectangle6.velocityY=3;

}

function draw() {
  background(255,255,255); 
  rectangle2.x=mouseX;
  rectangle2.y=mouseY;
  istouching(rectangle2,rectangle3);
  bounceoff(rectangle4,rectangle6);
  drawSprites();
}
function istouching(object1,object2){
  if(object1.x-object2.x < object2.width/2+object1.width/2 &&
    object2.x-object1.x< object2.width/2+object1.width/2 && 
    object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2) {
      object2.shapeColor="green";
      object1.shapeColor="green";
  
    }
   else{
     object2.shapeColor="blue";
     object1.shapeColor="blue";
   }
}
function bounceoff(object1,object2){
if (object1.x-object2.x<object1.width/2+object2.width/2 &&
  object2.x-object1.x<object1.width/2+object2.width/2){
    object1.velocityX = object1.velocityX*(-1);
    object2.velocityX = object2.velocityX*(-1);
  }
  if (object1.y-object2.y<object1.height/2+object2.height/2 &&
      object2.y-object1.y<object1.height/2+object2.height/2){
      object1.velocityY = object1.velocityY*(-1);
      object2.velocityY = object2.velocityY*(-1);
}
}