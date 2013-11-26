/*global createjs, $, Game*/
Game.Hero = function (myX, myY) {
    'use strict';
    var my = new createjs.Bitmap("img/alien.png"),
    startX = myX,
    startY = myY;
    my.moveTo = function (newX, newY, tween) {
        var newXpx, newYpx;
        my.posX = newX;
        my.posY = newY;
        //
        if (tween) {
            // find out where we want to go, then start tweening
            newXpx = my.posX * Game.gridSize + Game.offsetX;
            newYpx = my.posY * Game.gridSize + Game.offsetY;
            createjs.Tween.get(my).to({x: newXpx, y: newYpx}, 200);
        } else {
            // just jump to the correct position
            my.x = my.posX * Game.gridSize + Game.offsetX;
            my.y = my.posY * Game.gridSize + Game.offsetY;
        }
        Game.stage.update();
    };
    //
    
    my.moveBy = function (dirX, dirY) {
        my.moveTo(my.posX + dirX, my.posY + dirY, true);
    };
    my.moveTo(myX, myY);
    return my;
};

Game.move = function (dirX, dirY) {
    'use strict';
    var testX = Game.hero.posX + dirX,
        testY = Game.hero.posY + dirY,
        tileToTest;
    
    // find out if the projected position is 'inside' the world
    if (Game.tiles.inside(testX, testY) === false) {
        return;
    }
    
    // get the tile we are about to walk on
    tileToTest = Game.tiles.get(testX, testY);
    //
    if (tileToTest.tryToStepOn()) {
        Game.hero.moveTo(testX, testY, true);
    }
};