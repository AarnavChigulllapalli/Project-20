var score=0
var coin, coinImg
var sword, swordImg
var man, manImg
var coinsGroup, SwordsGroup

function preload(){
    coinImg=loadImage("Coin.png")
    manImg=loadAnimation("Runner-1.png", "Runner-2.png")
    swordImg=loadImage("Sword.png")
}

function setup() {
    createCanvas(400,400)
    man.createSprite(200,100,50,50)
    man.addAnimation(manImg)
    coinsGroup = new Group();
    SwordsGroup = new Group();
}

function draw() {
  if(man.isTouching(coinsGroup)){
    score=score+10
  }
  text(score,300,-50)
  if(man.isTouching(SwordsGroup)){
    text("Game Over", 200,200)
  }
  spawnCoins()
  spawnSwords()
  
  drawSprites()
}

function spawnCoins()
 {
  if (frameCount % 240 === 0) {
    coin = createSprite(200, -100);
    coin.x=Math.round(random(120,400));
    coin.addImage(coinImg);
    coin.velocityY = 1;  
    coin.depth=man.depth;
    man.depth+=1;
    coin.lifetime=300;
    coinsGroup.add(coin);
  }
}

function spawnSwords()
 {
  if (frameCount % 300 === 0) {
    sword = createSprite(200, -100);
    sword.x=Math.round(random(120,400));
    sword.addImage(swordImg);
    sword.velocityY = 1.5;  
    sword.depth=man.depth;
    man.depth+=1;
    sword.lifetime=300;
    SwordsGroup.add(sword);
  }
}