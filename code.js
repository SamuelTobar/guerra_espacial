var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["44d9501a-c4c9-4855-bb28-9bac99e2f74d","b9cf4d5d-0a45-4bee-b4c0-d1d4beed4e90","0ffed567-63aa-4839-a73c-adc76a6bc264","9d777d52-7d90-4731-9ea1-c963cd3071e5","4a26af3f-0010-4b3b-8de6-aae43a2dfaeb","8e3f8ad3-3928-46b1-b35c-f7e668d71781"],"propsByKey":{"44d9501a-c4c9-4855-bb28-9bac99e2f74d":{"name":"spacebattle_07_1","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"guwG71p.UbV2C.i6A3QYaDTSufLFqkGZ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/44d9501a-c4c9-4855-bb28-9bac99e2f74d.png"},"b9cf4d5d-0a45-4bee-b4c0-d1d4beed4e90":{"name":"retroaliens_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eJOw86q3DsRz49ubo.LxNssC2.7QWtee/category_retro/retroaliens_18.png","frameSize":{"x":356,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"eJOw86q3DsRz49ubo.LxNssC2.7QWtee","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":356,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eJOw86q3DsRz49ubo.LxNssC2.7QWtee/category_retro/retroaliens_18.png"},"0ffed567-63aa-4839-a73c-adc76a6bc264":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"9d777d52-7d90-4731-9ea1-c963cd3071e5":{"name":"spacebattle_11_1","sourceUrl":null,"frameSize":{"x":148,"y":182},"frameCount":1,"looping":true,"frameDelay":12,"version":"wlMEJPamhn35xmKZOil7wEALDcBxlcGh","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":182},"rootRelativePath":"assets/9d777d52-7d90-4731-9ea1-c963cd3071e5.png"},"4a26af3f-0010-4b3b-8de6-aae43a2dfaeb":{"name":"knife_1","sourceUrl":"assets/api/v1/animation-library/gamelab/v0ur50B5mERzgHnqxQKhGhuSD6ZndWkq/category_tools/knife.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"v0ur50B5mERzgHnqxQKhGhuSD6ZndWkq","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/v0ur50B5mERzgHnqxQKhGhuSD6ZndWkq/category_tools/knife.png"},"8e3f8ad3-3928-46b1-b35c-f7e668d71781":{"name":"face_knife_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"N.qK0.6SAKSaLa_6PLTH2_9mCYrqdySZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8e3f8ad3-3928-46b1-b35c-f7e668d71781.png"}}};
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

//fondo
var backGround = createSprite(200,200,600,600);
backGround.setAnimation("space_1");
//el jugador 1
var jugador_1 = createSprite(200,270,20,20);
jugador_1.setAnimation("spacebattle_07_1");
jugador_1.scale=0.07;
//el jugador 2
var jugador_2 = createSprite(200,70,20,20);
jugador_2.setAnimation("spacebattle_11_1");
jugador_2.scale=0.15;
//barrera invible
var barrera = createSprite(200,200,400,5);
//puntaje
var lives = 25;
var live = 25;
// laser
var laser = createSprite(200, 270,20,20);
laser.setAnimation("knife_1");
laser.scale = 0.2;
var laser2 = createSprite(200, 70,20,20);
laser2.setAnimation("face_knife_1");
laser2.scale=0.07;









function draw(){
  background("white");
  drawSprites();

//la barrera
barrera.visible=false;


//colisiones
createEdgeSprites();
jugador_1.collide(edges);  
jugador_1.bounce(barrera);
jugador_2.bounce(barrera);
jugador_2.collide(edges);
laser.bounce(leftEdge);
laser.bounce(rightEdge);
laser2.bounce(rightEdge);
laser2.bounce(leftEdge);

//movimiento de jugador_1
  if(keyDown(UP_ARROW)){
  jugador_1.y=jugador_1.y-7;
}

if(keyDown(DOWN_ARROW)){
  jugador_1.y=jugador_1.y+7;
}

if(keyDown(LEFT_ARROW)){
  jugador_1.x=jugador_1.x-7;
}

if(keyDown(RIGHT_ARROW)){
  jugador_1.x=jugador_1.x+7;
}



//movimiento del jugador_2
    if(keyDown("w")){
  jugador_2.y=jugador_2.y-7;
}

if(keyDown("s")){
  jugador_2.y=jugador_2.y+7;
}

if(keyDown("a")){
  jugador_2.x=jugador_2.x-7;
}

if(keyDown("D")){
  jugador_2.x=jugador_2.x+7;
}
  
 
 //laser 1
  if(keyDown(UP_ARROW)){
  laser.y=laser.y-7;
}

if(keyDown(DOWN_ARROW)){
  laser.y=laser.y+7;
}

if(keyDown(LEFT_ARROW)){
    laser.x=laser.x-7;
}

if(keyDown(RIGHT_ARROW)){
  laser.x=laser.x+7;
}
 
 //laser2
     if(keyDown("w")){
  laser2.y=laser2.y-7;
}

if(keyDown("s")){
  laser2.y=laser2.y+7;
}

if(keyDown("a")){
  laser2.x=laser2.x-7;
}

if(keyDown("D")){
  laser2.x=laser2.x+7;
}
  
  //vida del jugador_2
   fill("yellow");
 textSize(16);
 text(lives,380,40);
 fill("yellow");
 textSize(16);
 text("Lives Left",330,20);
  //vida del jugardor_1
   fill("yellow");
 textSize(16);
 text(live,85,385);
 fill("yellow");
 textSize(16);
 text("Live Left",10,385);
  
  //disparo del jugador_1
  if (keyDown("p")){
  laser.velocityY=-20;

  }
  
  //la colision del jugador y el laser
  if (laser.isTouching(jugador_2)) {
    laser.x=jugador_1.x;
    laser.y=jugador_1.y;
    lives = lives-1;
    laser.velocityY=0;
  }
  if (laser.isTouching(edges)) {
   laser.velocityY=0;
 laser.y=jugador_1.y;
    
  }
  

  //disparo del jugador_2
  if (keyDown("t")){
  laser2.velocityY=20;

  }
  
  //la colision del jugador y el laser
  if (laser2.isTouching(jugador_1)) {
    laser2.x=jugador_2.x;
    laser2.y=jugador_2.y;
    live = live-1;
    laser2.velocityY=0;
  }
  if (laser2.isTouching(edges)) {
   laser2.velocityY=0;
 laser2.y=jugador_2.y;
    
  }
  

  if (live=live=0) {
    jugador_1.destroy();
  }
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
