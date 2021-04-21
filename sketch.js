var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	
	//load animation for fairy here
fairyAnimation=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
fairyImage=loadImage("images/fairy.png")

fairyVoice=loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fairyVoice.play();
	//create fairy sprite and add animation for fairy
fairy=createSprite(300,520)
fairy.addAnimation("fairyMove",fairyAnimation);
fairy.scale=0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine)
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y>330&&starBody.position.y>470){
	  Matter.Body.setStatic(starBody,true);
	  star.velocityY=-1
     

	}
 fairy.velocityX=0;
 fairy.velocityY=0;
 
 
  if(keyDown(RIGHT_ARROW)){
	fairy.velocityX=6
}else if (keyDown(LEFT_ARROW)){
	fairy.velocityX=-6
}else if (keyDown(DOWN_ARROW)){
	star.velocityY=3
}

if(star.y>320){
	star.velocityY=0
}

 
 
 
  keyPressed()
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		restitution:1;
	}

	//write code to move fairy left and right


}
