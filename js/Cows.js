/*global createjs, Game*/
Game.Cow = function (myX, myY) {
    'use strict';
    var startX = myX,
    	startY = myY,
    	my = new createjs.Bitmap(Game.imgResSrcs["cow"]);
    //
    
    my.rock = function(){
    	createjs.Tween.get(my).to({rotation:20}, 200).call(function(){
    		createjs.Tween.get(my).to({rotation:0}, 200);
    	});
    };
    
    my.setCowPosition = function (newX, newY) {
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
    my.setCowPosition(myX, myY);
    return my;
};

Game.areAllCowsCollected = function(){
	Game.levelIsWon = true;
};

Game.addCows = function(){
	var cowIndex;
	for (cowIndex in Game.cows){
    	Game.stage.addChild(Game.cows[cowIndex]);
    }
};

Game.cowAt = function (testX, testY){
	var cowIndex, theCow;
	for (cowIndex in Game.cows){
		theCow = Game.cows[cowIndex];
		if (theCow.isAt(testX, testY)){
			return theCow;
		}
	}
};
