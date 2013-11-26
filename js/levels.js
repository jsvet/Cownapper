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
        grid : [
            [2, 2, 0, 0, 0, 2, 1],
            [2, 0, 0, 4, 4, 0, 1],
            [1, 2, 0, 2, 3, 0, 1],
            [1, 0, 1, 0, 4, 4, 1],
            [2, 0, 1, 0, 1, 0, 1],
            [2, 5, 2, 0, 2, 0, 1],
            [2, 0, 2, 1, 2, 2, 1]
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