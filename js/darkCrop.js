/*global createjs, Game*/
Game.darkCrop = function (myX, myY) {
    'use strict';
    var startX = myX,
    	startY = myY,
    	my = new createjs.Bitmap(Game.imgResSrcs["darkCrop"]);

    //
    my.setDarkCropPosition = function (newX, newY) {
        var newXpx, newYpx;
        my.posX = newX;
        my.posY = newY;
        //
         // just jump to the correct position
          	my.x = my.posX * Game.gridSize + Game.offsetX + 15 + my.regX;
            my.y = my.posY * Game.gridSize + Game.offsetY + 15 + my.regY;
        
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
    
    my.setDarkCropPosition(myX, myY);
    return my;
};


Game.addDarkCrops = function(){
	var darkCropIndex;
	for (darkCropIndex in Game.darkCrops){
    	Game.stage.addChild(Game.darkCrops[darkCropIndex]);
    }
    console.log("addDarkCrops");
};
