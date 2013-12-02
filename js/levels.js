/*global Game*/
//declare an array of levels as a Game property
/*
LEGEND
0 hero
1 cow
2 UFO



*/


Game.levels = [
    {
        minimumCows : 5,
        grid : [
        	["C0N","W0N","W0N","W0N","W0N","W0N","W0N","2"  ],
			["W3N","0"  ,"W2R","W2R","W2R","1"  ,"W2R","C2N"],
			["W3N","W2R","W2R","W2R","W2R","W2R","W2R","C2N"],
			["W3N","W2R","W3R","W2R","W2R","W2R","W2R","1"  ],
			["W3N","W2R","W3R","W2R","W2R","W2R","W2R","1"  ],
			["C3N","1"  ,"W2N","W2N","W2N","W2N","W2N","1"  ],
		]
    },
    {
    	minimumCows : 5,
    	grid : [
    		["F0N", "F0N", "C0R", "H0R", "W0N", "W0N", "H0R", "H0R", "H0R", "C1R"],
            ["W3N", "G0N", "0"  , "F0N", "1"  , "G0N", "C0R", "1"  , "1"  , "H1R"],
            ["W3N", "C3R", "C1N", "F0N", "C3R", "F0N", "H1R", "1"  , "1"  , "H1R"],
            ["W3N", "F0N", "H1R", "F0N", "W0R", "F0N", "C3R", "H0R", "H0R", "C2R"],
            ["W3N", "F0N", "H1R", "F0N", "W3R", "G0N", "G0N", "G0N", "G0N", "2"  ],
            ["W3N", "W3R", "H1R", "G0N", "C1N", "G0N", "C2R", "F0N", "F0N", "F0N"],
            ["W3N", "1"  , "C2R", "C0R", "C2R", "G0N", "F0N", "F0N", "F0N", "F0N"],
            ["W3N", "F0N", "W0N", "C2R", "G0N", "G0N", "G0N", "G0N", "G0N", "G0N"],
            ["W3N", "G0N", "G0N", "G0N", "G0N", "H0R", "H0R", "H0R", "C3R", "1"  ],
            ["C3N", "W2N", "F0N", "F0N", "F0N", "F0N", "F0N", "F0N", "1"  , "F0N"],
    	]
   },
   {
    	minimumCows : 7,
    	grid : [
    		["C0R", "W0R", "1"  , "H0R", "C1R", "C0R", "W0R", "W0R", "W0R", "C1R"],
			["C3R", "W2R", "W0R", "C1R", "H1R", "W3R", "0"  , "H0R", "1"  , "C2R"],
			["1"  , "W2R", "C3R", "H1R", "C3R", "G0N", "H0R", "H0R", "1"  , "C1R"],
			["C3R", "W2R", "H0R", "W1R", "W3R", "C2R", "C0R", "W0R", "W0R", "W1R"],
			["W0R", "1"  , "W2R", "W1R", "W3R", "C2R", "H1R", "W2R", "C1R", "W1R"],
			["C0R", "W3R", "G0N", "W1R", "W3R", "H0R", "1"	, "C1R", "H1R", "W1R"],
			["W3R", "H0R", "C1R", "H1R", "W0R", "1"  , "C2R", "W3R", "H1R", "1"  ],
			["H1R", "W1R", "W2R", "C2R", "G0N", "C0R", "W2R", "W3R", "C3R", "W1R"],
			["W3R", "C3R", "C1R", "C3R", "G0N", "W3R", "C2R", "C3R", "C1R", "H1R"],
			["1"  , "W2R", "C2R", "C3R", "G0N", "G0N", "2"  , "W0R", "C2R"  , "C2R"]
    	]
   }
];
// return the current map of tile codes, unless another level index is specified
Game.levels.getMap = function (lev) {
    "use strict";
    lev = lev || Game.currentLevel;
    return this[lev].grid;
};

// return the current map of tile codes, unless another level index is specified
Game.levels.getMinimumCows = function (lev) {
    "use strict";
    lev = lev || Game.currentLevel;
    return this[lev].minimumCows;
};

