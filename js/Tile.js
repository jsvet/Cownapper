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
Game.CowTile = function (myX, myY, myType, tRotation, tCanRotate) {
	var my = Game.Tile(myX, myY, myType),
		wallArray = {
			"wall" : [1,0,0,0],
			"corner" : [1,0,0,1],
			"hall" : [1,0,1,0],
			"field" : [1,1,1,1],
			"ground" : [0,0,0,0]
		}[myType],
		i, wallCode, rot = 0;
	my.regX = Game.gridSize / 2;
	my.regY = Game.gridSize / 2;
	//
    my.x = my.posX * Game.gridSize + Game.offsetX + my.regX;
    my.y = my.posY * Game.gridSize + Game.offsetY + my.regY;
	//
	for (i=0; i<tRotation; i+=1) {
		wallCode = wallArray.pop();
		wallArray.unshift(wallCode);
	}
	my.rotation = 90 * tRotation;
	
	console.log(wallArray);
	//console.log(myType + ", " + tRotation + ", " + my.rotation);
	
	my.rotate = function () {
		tRotation += 1;
		my.rotation = 90 * tRotation;
	};
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


