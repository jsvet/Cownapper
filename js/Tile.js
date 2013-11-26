/*global Game, createjs*/
Game.Tile = function (myX, myY, myType) {
    'use strict';
    var imgSrc = Game.imgResSrcs[myType],
        my = new createjs.Bitmap(imgSrc);
    my.type = myType;
    my.posX = myX;
    my.posY = myY;
    my.x = my.posX * Game.gridSize + Game.offsetX;
    my.y = my.posY * Game.gridSize + Game.offsetY;
    //
    //
    if (my.type === "field"){
    	
    }
    if (my.type === "ufoExit") {
        Game.door = my;
    }
    //
    my.update = function () {
        my.image.src = imgSrc;
    };
    //
    
    my.tryToStepOn = function () {
    
       
        if (my.type === "ufoExit") {
            Game.levelIsWon = true;
            Game.update();
        }
        return true;
    };
    //
    return my;   
    
    my.changeTo = function (what) {
        my.type = what;
        imgSrc = Game.imgResSrcs[what];
        Game.update();
    };
    
    return my;    
    
    //
 


};    


