/*global createjs, Game*/
Game.UFO = function (myX, myY) {
    'use strict';
    var startX = myX,
    	startY = myY,
    	my = new createjs.Bitmap("img/laserbeam.png");
    //
    
    my.rock = function(){
    	createjs.Tween.get(my).to({rotation:20}, 200).call(function(){
    		createjs.Tween.get(my).to({rotation:0}, 200);
    	});
    };
    
    my.setUFOPosition = function (newX, newY) {
        var newXpx, newYpx;
        my.posX = newX;
        my.posY = newY;
        //
         // just jump to the correct position
          	my.x = my.posX * Game.gridSize + Game.offsetX + my.regX;
            my.y = my.posY * Game.gridSize + Game.offsetY + my.regY;
        
        
        Game.stage.update();
    };
    //
    my.isAt = function(somewhereX, somewhereY){
        return my.posX === somewhereX && my.posY === somewhereY;
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
    	Game.stage.addChild(Game.ufos[ufoIndex]);
    }
};

Game.ufoAt = function (testX, testY){
	var ufoIndex, theUFO;
	for (ufoIndex in Game.ufos){
		theUFO = Game.ufos[ufoIndex];
		if (theUFO.isAt(testX, testY)){
			return theUFO;
		}
	}
};
