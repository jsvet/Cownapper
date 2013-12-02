/*global Game, createjs, console*/
// here is the code for buttons, on-screen messages etc.
Game.showNextLevelBtn = function () {
    'use strict';
    var txt = new createjs.Text("NEXT LEVEL", "18px Helvetica", "white"),
        hitarea = new createjs.Shape(),
        border = 10,
        hitW = txt.getMeasuredWidth() + (border * 2),
        hitH = txt.getMeasuredHeight() + (border * 2),
        hitX,
        fortune = new createjs.Text("You made it back to the Spaceship!! ", "18px Gorditas", "white"),
        button = new createjs.Container(),
        hitY;
    //
    txt.x = 200;
    txt.y = 180;
    hitX = txt.x - border;
    hitY = txt.y - border;
    //
    hitarea.graphics.beginFill("#058").drawRect(hitX, hitY, hitW, hitH);
    button.addChild(hitarea);
    button.addChild(txt);
    Game.stage.addChild(button);
    Game.stage.addChild(fortune);
    Game.stage.update();
    //
    return button;
};
//
Game.showLevelOver = function () {
    'use strict';
    Game.stage.removeAllChildren();
    var nextBtn = Game.showNextLevelBtn(),
        perfect = Game.levels[Game.currentLevel].perfect,
        good = Game.levels[Game.currentLevel].good,
        ok = Game.levels[Game.currentLevel].ok;
    /*//this will visualize player skill with stars
    Game.showLevelStars(perfect, good, ok); */
    //forget about the tiles used for current level
    Game.tiles = [];
    Game.currentLevel += 1;
    //hit.addEventListener("mousedown", this.mouseDown);
    nextBtn.addEventListener("mousedown", function () {
        Game.stage.removeAllChildren();
        Game.initModel();
    });
};

/*
//
Game.Star = function (sx, sy) {
    'use strict';
    var my = new createjs.Bitmap("img/grey-star.png");
    my.x = sx;
    my.y = sy;
    Game.stage.addChild(my);
    Game.stage.update();
    my.gold = function () {
        my.image.src = "img/yellow-star.png";
        Game.stage.update();
    };
    return my;
};
//
Game.showLevelStars = function (perfect, good, ok) {
    'use strict';
    //show three grey stars by default
    var starLeft = new Game.Star(160, 110),
        starMiddle = new Game.Star(225, 100),
        starRight = new Game.Star(290, 110);

    //compare player performance with level parameters
    //make the left star golden if player performance was better than just ok  
    if (Game.clicks <= ok) {
        starLeft.gold();
    } else {
        console.log("You can do it better, can't you?");
    }

    //make the middle star golden if player performance was better than just good  
    if (Game.clicks <= good) {
        starLeft.gold();
        starMiddle.gold();
    }

    //make the last star golden if player performance was perfect
    if (Game.clicks <= perfect) {
        starLeft.gold();
        starMiddle.gold();
        starRight.gold();
    }
}; */