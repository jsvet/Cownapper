/*global createjs, $*/
// The main settings for the game here:
var Game = {
    stage : new createjs.Stage($("#stage")),
    gridSize : 50,
    imgResSrcs : {
        "ground": "img/ground.png",
        "field" : "img/field.png",
        "wall" : "img/wall.png",
        "cow" : "img/cow.png",
        "ufoExit" : "img/laserbeam.png",
        "farmer" : "img/farmer.png",
        "hall" : "img/hall.png",
        "corner" : "img/corner.png"
    },
    // to avoid redundancy, we refer to property identifiers in imgResSrcs here
    tileSrcs : ["ground", "field", "wall", "hero", "cow", "ufoExit", "hall", "farmer"],
    tileKeys : {
    	"W" : "wall",
    	"C" : "corner",
    	"H" : "hall",
    	"F" : "field",
      	"G" : "ground"
	
    },
    levelIsWon : false,
    offsetX : 10,
    offsetY : 10,
    currentLevel : 0,
    minimumCows : 1,
    cowsCollected : 0
};


//
// this is called ONCE at start of game
Game.init = function () {
    'use strict';
    createjs.Ticker.addEventListener("tick", Game.stage);
    Game.initModel();
    Game.setupInput();
};


//
// this is called at start of each level
Game.initModel = function () {
    'use strict';
    var theMap = Game.Grid(Game.levels.getMap()), // make a wrapped grid of tile codes
        
        tiles = [], // will be used to create a grid object containing all the tiles
        
        type, tile, tname, tBitmap, tkey, tRotation, tCanRotate;
    //
    // get the minimum cows for this level
    Game.minimumCows = Game.levels.getMinimumCows();
	Game.cowsCollected = 0;
   	
    Game.cows = [];
    Game.ufos = [];
        
    //
    // convert 2d array of tile codes into a 2d array of tile objects...
    theMap.process(function (tileCode, col, row) {
        //
        if (col >= tiles.length) {
            tiles.push([]); // make a new column
        }

        
        if (typeof tileCode === "string") {    	
        	tkey = tileCode.charAt(0);
        	if (tkey === "0") { // hero
        		Game.hero = new Game.Hero(col, row);
        		tkey = "G";
        	} else if (tkey === "1") { // cow
        		Game.cows.push(new Game.Cow(col, row));
        		tkey = "G";
        	}else if (tkey === "2") { // UFO
        		Game.ufos.push(new Game.UFO(col, row));
        		tkey = "G";
        	}
        	
        	tname = Game.tileKeys[tkey];
        	type = tname; //Game.imgResSrcs[tname];
        	
        	if (tileCode.length > 1) {
        		tRotation = parseInt(tileCode.charAt(1),10);
        		tCanRotate = tileCode.charAt(2);
        	}
        	
        } else {
	        type = Game.tileSrcs[tileCode]; // look up the tile name
        }
        
        // now make the tile
        tile = new Game.MazeTile(col, row, type, tRotation, tCanRotate);
        
        // store the tile in our 2d array of tiles and add it to the stage
        tiles[row][col] = tile;
        Game.stage.addChild(tile);
        
    });
    
    Game.tiles = Game.Grid(tiles); // wrap the tiles array up as a 'grid' object
    // finally, now that all tiles are drawn, add the objects on top
    Game.stage.addChild(Game.hero);
    Game.addCows();
    
};


//
// update all tiles, check if game is won(REDO WIN STATE), then update the stage

Game.update = function () {
    'use strict';
    Game.tiles.process(function (tile) {
        tile.update();
    });
    
    if (Game.levelIsWon) {
        window.setTimeout(function(){
        	Game.showLevelOver();
        	Game.levelIsWon = false;
        },100);
        Game.levelIsWon = false;
    }
};

//
// handle player's attempt to move


// 
// preloading can't be avoided. Get it out of the way, with the option to run immediately
Game.preloadAssets = function (runImmediatelyAfterwards) {
    'use strict';
    var assetKey, asset, assetList = [];
    //create a LoadQueue object
    Game.preloader = new createjs.LoadQueue(false);
    if (runImmediatelyAfterwards) {
        //add an event to be dispatched when loading is completed
        Game.preloader.addEventListener("complete", Game.init);
    }
    //indicate an array of image files to preload
    for (assetKey in Game.imgResSrcs) {
        if (Game.imgResSrcs.hasOwnProperty(assetKey)) {
            asset = Game.imgResSrcs[assetKey];
            assetList.push(asset);
        }
    }
    Game.preloader.loadManifest(assetList);
};
//
//
Game.preloadAssets(true); // we start here