/*global createjs, Game*/
Game.UFO = function (myX, myY) {
    'use strict';
    var startX = myX,
    	startY = myY,
    	my = new createjs.Bitmap("img/UFO.png");
    //
    
    // rewrite this one to animate UFO landing and taking off *********
    my.rock = function(){
    	createjs.Tween.get(my).to({rotation:20}, 200).call(function(){
    		createjs.Tween.get(my).to({rotation:0}, 200);
    	});
    };
    
    
    my.setUFOPosition = function (newX, newY) {
        var newXpx, newYpx;
        my.posX = newX;
        my.posY = newY;
        // isVisable makes the space where the UFO will land not end the level
        my.isVisable = false;
        //
         // just jump to the correct position
          	my.x = my.posX * Game.gridSize + Game.offsetX + my.regX;
            my.y = my.posY * Game.gridSize + Game.offsetY + my.regY;
        
        
        Game.stage.update();
    };
    
    // when UFO lands it will work
    my.makeUfoActive = function(){
    	my.isVisable = true;
    };
    
    // when UFO flies away, it will not work
    my.makeUfoInactive = function(){
    	my.isVisable = false;
    };
    
    
    //
    my.isAt = function(somewhereX, somewhereY){
        return my.posX === somewhereX && my.posY === somewhereY && my.isVisable;
    };
    //
    my.backToStart = function(){
    	my.moveTo(startX, startY);
    };
    my.setUFOPosition(myX, myY);
    return my;
};

Game.addUFO = function(){
	var ufoIndex;
	for (ufoIndex in Game.ufos){
		theUfo = Game.ufos[ufoIndex];
    	Game.stage.addChild(theUfo);
    	theUfo.makeUfoActive();
    	createjs.Sound.play("ufo");
    }
};

Game.UfoFliesHome = function(){
	var ufoIndex;
	for (ufoIndex in Game.ufos){
		theUfo = Game.ufos[ufoIndex];
    	Game.stage.removeChild(theUfo);
    	theUfo.makeUfoInactive();
    	createjs.Sound.play("ufo");
    	Game.levelIsWon = true;
    	Game.update();
    }
};

Game.ifUFOFlyHome = function (testX, testY){
	var ufoIndex, theUFO;
	for (ufoIndex in Game.ufos){
		theUFO = Game.ufos[ufoIndex];
		if (theUFO.isAt(testX, testY)){
			Game.UfoFliesHome();
		}
	}
};
