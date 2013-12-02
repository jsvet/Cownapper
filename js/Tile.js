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
   
    //******* This no loner works!! UFO is now an object rather than a tile type.
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
    
    my.changeTo = function (what) {
        my.type = what;
        imgSrc = Game.imgResSrcs[what];
        Game.update();
    };
    
    return my;    
    //
};  

Game.MazeTile = function (myX, myY, myType, tRotation, tCanRotate) {
	var my = Game.Tile(myX, myY, myType),
		wallArray = {
			"wall" : [1,0,0,0],
			"corner" : [1,0,0,1],
			"hall" : [1,0,1,0],
			"field" : [1,1,1,1],
			"ground" : [0,0,0,0]
		}[myType],
		i, 
		wallCode, 
		rot = 0;
	
	my.regX = Game.gridSize / 2;
	my.regY = Game.gridSize / 2;
	//
    my.x = my.posX * Game.gridSize + Game.offsetX + my.regX;
    my.y = my.posY * Game.gridSize + Game.offsetY + my.regY;
	//
	
	var rotate = function () {		
		my.rotation = (my.rotation + 90) % 360;
		//Rotate walls 
		wallCode = wallArray.pop();
		wallArray.unshift(wallCode);
	};
	
	my.rotateOnLeave = function () {
		window.setTimeout(function(){
        	if(tCanRotate === "R"){
			rotate();
		}
        },300) 	;
		
		
	};
	
	//Rotate the tile tRotation times.
	for(i = 0; i<tRotation;i+=1)
	{
		rotate();
	}
	
	my.canIenter = function (dirX, dirY) {
		if (dirX === 1) {
			return wallArray[3] === 0;
		} else if (dirX === -1) {
			return wallArray[1] === 0;
		}
		if (dirY === 1) {
			return wallArray[0] === 0;
		} else if (dirY === -1) {
			return wallArray[2] === 0;
		}
		return true;
	};
	my.canIexit = function (dirX, dirY) {
		if (dirX === 1) {
			return wallArray[1] === 0;
		} else if (dirX === -1) {
			return wallArray[3] === 0;
		}
		if (dirY === 1) {
			return wallArray[2] === 0;
		} else if (dirY === -1) {
			return wallArray[0] === 0;
		}
		return true;
	};
	

	return my;
};


