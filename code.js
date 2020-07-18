var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f0bcb212-1715-40e8-98a1-902d27b19149","b5414f60-6035-4d58-9bbd-9118e6ca5eb1","8c7994e7-4189-4598-b374-8c6a3b78901a","018c6769-bdfb-4352-999d-01fbe3610101","54cad0f0-8c5a-47e3-9279-24a3cd8dd46b","96d4d372-da34-422b-8fc1-55291ad831e4","e87d8c88-b94f-4220-bbdf-7c50fc25d351","57775153-45db-444a-aa55-1be7b6fbf65c","9b887f0c-74d9-4111-9e3d-825230ae7d98","158d07ed-3b0e-4bf6-8649-b4095a2d3969","18807ba7-2dbb-4238-a523-409fa5c0edcb"],"propsByKey":{"f0bcb212-1715-40e8-98a1-902d27b19149":{"name":"giraffe","sourceUrl":"assets/api/v1/animation-library/gamelab/BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI/category_animals/giraffe_tall.png","frameSize":{"x":160,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI/category_animals/giraffe_tall.png"},"b5414f60-6035-4d58-9bbd-9118e6ca5eb1":{"name":"gnome_1","sourceUrl":"assets/api/v1/animation-library/gamelab/S9Pv1ac6plNfwDcyrKTNTPFxkt6aCBUN/category_characters/gnome.png","frameSize":{"x":44,"y":136},"frameCount":1,"looping":true,"frameDelay":2,"version":"S9Pv1ac6plNfwDcyrKTNTPFxkt6aCBUN","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":136},"rootRelativePath":"assets/api/v1/animation-library/gamelab/S9Pv1ac6plNfwDcyrKTNTPFxkt6aCBUN/category_characters/gnome.png"},"8c7994e7-4189-4598-b374-8c6a3b78901a":{"name":"rockDown_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sQOiaD6zNgCGsBj_o3UGU99QB6HCTlgr/category_obstacles/rockDown.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"sQOiaD6zNgCGsBj_o3UGU99QB6HCTlgr","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sQOiaD6zNgCGsBj_o3UGU99QB6HCTlgr/category_obstacles/rockDown.png"},"018c6769-bdfb-4352-999d-01fbe3610101":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/iuSObUTRgWeiPx60vi9Zx4cqg.1khF0d/category_gameplay/pieceYellow_border00.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"iuSObUTRgWeiPx60vi9Zx4cqg.1khF0d","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iuSObUTRgWeiPx60vi9Zx4cqg.1khF0d/category_gameplay/pieceYellow_border00.png"},"54cad0f0-8c5a-47e3-9279-24a3cd8dd46b":{"name":"computer","sourceUrl":"assets/api/v1/animation-library/gamelab/J6XjDwhsK30XbwXAuxCVgLWemJeUyufd/category_gameplay/pieceBlack_border01.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"J6XjDwhsK30XbwXAuxCVgLWemJeUyufd","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/J6XjDwhsK30XbwXAuxCVgLWemJeUyufd/category_gameplay/pieceBlack_border01.png"},"96d4d372-da34-422b-8fc1-55291ad831e4":{"name":"dice2","sourceUrl":"assets/api/v1/animation-library/gamelab/iyVd6Orhswk2e.RhivFAAREu9nJfu5s9/category_gameplay/dieRed2.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"iyVd6Orhswk2e.RhivFAAREu9nJfu5s9","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iyVd6Orhswk2e.RhivFAAREu9nJfu5s9/category_gameplay/dieRed2.png"},"e87d8c88-b94f-4220-bbdf-7c50fc25d351":{"name":"dice1","sourceUrl":"assets/api/v1/animation-library/gamelab/q8bXapdcDHQv906ohp4zEIWfVvKm8H0L/category_gameplay/dieRed1.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"q8bXapdcDHQv906ohp4zEIWfVvKm8H0L","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/q8bXapdcDHQv906ohp4zEIWfVvKm8H0L/category_gameplay/dieRed1.png"},"57775153-45db-444a-aa55-1be7b6fbf65c":{"name":"dice3","sourceUrl":"assets/api/v1/animation-library/gamelab/ruSZyOxWQ1SYK5GvWUQEAkPIjAt.QY5x/category_gameplay/dieRed3.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"ruSZyOxWQ1SYK5GvWUQEAkPIjAt.QY5x","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ruSZyOxWQ1SYK5GvWUQEAkPIjAt.QY5x/category_gameplay/dieRed3.png"},"9b887f0c-74d9-4111-9e3d-825230ae7d98":{"name":"dice4","sourceUrl":"assets/api/v1/animation-library/gamelab/VPQk71aCLs8ZVnIqxMhhFpoHD.0quCK7/category_gameplay/dieRed4.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"VPQk71aCLs8ZVnIqxMhhFpoHD.0quCK7","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VPQk71aCLs8ZVnIqxMhhFpoHD.0quCK7/category_gameplay/dieRed4.png"},"158d07ed-3b0e-4bf6-8649-b4095a2d3969":{"name":"dice5","sourceUrl":"assets/api/v1/animation-library/gamelab/cT.HuenbeY02bFdyyYMLo7P2qtwWF_EO/category_gameplay/dieRed5.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"cT.HuenbeY02bFdyyYMLo7P2qtwWF_EO","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cT.HuenbeY02bFdyyYMLo7P2qtwWF_EO/category_gameplay/dieRed5.png"},"18807ba7-2dbb-4238-a523-409fa5c0edcb":{"name":"dice6","sourceUrl":"assets/api/v1/animation-library/gamelab/RDZUB_vIrfex6Rwvs38zLP0dwhnkloSW/category_gameplay/dieRed6.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"RDZUB_vIrfex6Rwvs38zLP0dwhnkloSW","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RDZUB_vIrfex6Rwvs38zLP0dwhnkloSW/category_gameplay/dieRed6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var y_pos = 20;
var rand;
var playerDice = 0;
var computerDice = 0;
var rowGroup = createGroup()
var diceThrown = false;
var compLastMove = 100;
var playerLastMove = 100;

while(y_pos <=400){
for (var i_pos = 20; i_pos < 400; i_pos+=40) {
  
  var row10 = createSprite(i_pos,y_pos,40,40)
  //rgb(0-255,0-255,0-255)
  row10.shapeColor =rgb(randomNumber(150,255),randomNumber(120,255),randomNumber(200,255));
  rowGroup.add(row10);
}
y_pos += 40;
} 


var up1 = createSprite(20,340)
up1.setAnimation("giraffe")
up1.scale = 0.3;
up1.setCollider("circle",0,70,60)
//up1.debug = true;

var up2 = createSprite(180,140)
up2.setAnimation("giraffe")
up2.scale = 0.3;
up2.setCollider("circle",0,70,60)
//up2.debug = true;

var up3 = createSprite(340,60)
up3.setAnimation("giraffe")
up3.setCollider("circle",0,70,60)
up3.scale = 0.3;
//up3.debug = true;

var up4 = createSprite(300,225)
up4.setAnimation("gnome_1")
up4.scale = 0.6;

var up5 = createSprite(65,135)
up5.setAnimation("gnome_1")
up5.scale = 0.6;

var down1 = createSprite(140,40)
down1.setAnimation("rockDown_1")
down1.scale = 0.3;

var down2 = createSprite(180,285)
down2.setAnimation("rockDown_1")
down2.scale = 0.25;

var down3 = createSprite(300,360)
down3.setAnimation("rockDown_1")
down3.scale = 0.25;

var dice = createSprite(200,200)
dice.visible = false;
dice.rotation = 90

var player = createSprite(395,360)
player.setAnimation("player")
player.scale = 0.5

var computer = createSprite(395,390)
computer.setAnimation("computer")
computer.scale = 0.5

fill("black")
textSize(16)

function draw() {
  //background("white")
  drawSprites()
  var y_pos_c = 20;
  var counter = 100;
  while(y_pos_c <=400){
for (var i_pos_c = 20; i_pos_c < 400; i_pos_c+=40) {
  
  text(counter--,i_pos_c,y_pos_c)
  
}
y_pos_c += 40;
}
//console.log("throwDice is "+diceThrown)
if(keyWentDown("p")&& !diceThrown){
  dice.visible = false;
  throwDice();
  playerCalculateAndMove();
  
}

if(keyWentDown("c") && !diceThrown){
  dice.visible = false;
  throwDice();
  computerMove();
}
if(player.isTouching(up1)){
  playerLastMove = 70
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up1)){
  
  compLastMove = 70
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}
if(player.isTouching(up2)){
  
  playerLastMove =24
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up2)){
  
  compLastMove = 24
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}
if(player.isTouching(up3)){
  
  playerLastMove = 9
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up3)){
  
  compLastMove = 9
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}

if(player.isTouching(down3)){
  
  playerLastMove = 97
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(down3)){
  
  compLastMove = 97
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}

if(player.isTouching(down2)){
  
  playerLastMove = 74
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(down2)){
  
  compLastMove = 74
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}

if(player.isTouching(down1)){
  
  playerLastMove = 13
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(down1)){
  
  compLastMove = 13
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}

if(player.isTouching(up4)){
  
  playerLastMove = 47
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up4)){
  
  compLastMove = 47
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}
if(player.isTouching(up5)){
  
  playerLastMove =21
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up5)){
  
  compLastMove = 21
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}
if(player.x === computer.x && player.y === computer.y){
  player.x +=4;
  computer.x -=4;
}
console.log("compLastMove"+compLastMove)
console.log("playerLastMove"+playerLastMove)

if(compLastMove ===0){
  console.log("COMPUTER WIN")
  fill("blue")
  textSize(20)
  text("YOU LOSE", 200,200)
}
if(playerLastMove ===0){
  console.log("PLAYER WIN")
  fill("blue")
  textSize(20)
  text("YOU WIN", 200,200)
}
}

function throwDice(){
  
  playSound("assets/category_board_games/dice_shuffle.mp3")
  console.log("throwDice")
  diceThrown = true;
  var rot = 10;
  rand = randomNumber(1,6)
  dice.setAnimation("dice"+rand)
  dice.visible = true;
  dice.scale = 0.5
  while(rot>0){
  dice.rotation = dice.rotation +rot;
  dice.rotateToDirection
  rot--
  }
}
function playerCalculateAndMove(){
  
  console.log("player dice = "+rand);
  console.log("player before chance is " +playerLastMove)
  if(playerLastMove < 6 && playerLastMove< rand){
    console.log("PLAYER CANT MOVE")
  }
  else{
  playerLastMove -= rand;
  console.log("player after turn" +playerLastMove)
  player.x = rowGroup.get(playerLastMove).x
  player.y = rowGroup.get(playerLastMove).y
  console.log([player.x,player.y]);
  }
    diceThrown = false;

}


function computerMove(){
  
  console.log("computer dice = "+rand);
  console.log("computer before turn is " +compLastMove)
   
  if(compLastMove < 6 && compLastMove< rand){
    console.log("COMPUTER CANT MOVE")
  }
  else{
    compLastMove -= rand;
    console.log("computer after turn is " +compLastMove)
    computer.x = rowGroup.get(compLastMove).x
    computer.y = rowGroup.get(compLastMove).y
    console.log([computer.x,computer.y]);
  }
    
    diceThrown = false;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
