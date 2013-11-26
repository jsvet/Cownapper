/*global Game*/
//declare an array of levels as a Game property
/*
LEGEND
0 norotate
1 rotate
2 cow
3 ufoExit
4 hero
*/


Game.levels = [
    {
        perfect : 2,
        gridOld : [
            [2, 2, 6, 0, 0, 2, 1],
            [2, 0, 0, 4, 4, 0, 1],
            [1, 2, 0, 2, 3, 0, 1],
            [1, 0, 1, 0, 4, 4, 1],
            [2, 0, 1, 0, 1, 0, 1],
            [2, 5, 2, 0, 2, 0, 1],
            [2, 0, 2, 1, 2, 2, 1]
        ],
        grid : [
			["C0N","W0N","W0N","W0N","W0N","W0N","W0N","C1N"],
			["W3N","0"  ,"W2R","W2R","W2R","W2R","W2R","C2N"],
			["W3N","W2R","W2R","W2R","W2R","W2R","W2R","C2N"],
			["W3N","W2R","W3R","W2R","W2R","W2R","W2R","C2N"],
			["W3N","W2R","W3R","W2R","W2R","W2R","W2R","C2N"],
			["C3N","W2N","W2N","W2N","W2N","W2N","W2N","C2N"],
		]
    },
    {
        perfect : 2,
        grid : [
           	[1, 0, 1, 1, 1, 1, 1],
            [1, 4, 0, 2, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 3, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1]
            
        ]
    },
    {
        perfect : 5,
        grid : [
           	[1, 0, 1, 1, 1, 1, 1],
            [1, 4, 0, 2, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 3, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ]
    }
];
// return the current map of tile codes, unless another level index is specified
Game.levels.getMap = function (lev) {
    "use strict";
    lev = lev || Game.currentLevel;
    return this[lev].grid;
};