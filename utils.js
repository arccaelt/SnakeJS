import {GAME_CONFIG} from "./config.js";
import {movingDirection} from "./config.js";
import Cell from "./cell.js";
import {drawRect} from "./renderer.js";

let lookup = [];

// NOTE: We don't want to spawn the food at coords which are at the edge of the board
// because it will be invisible
function createLookupTable() {
    for (let i = 0; i < GAME_CONFIG.BOARD_ROWS; i++) {
        for (let j = 0; j < GAME_CONFIG.BOARD_COLS; j++) {
            lookup.push([i * GAME_CONFIG.BOARD_CELL_HEIGHT, j * GAME_CONFIG.BOARD_CELL_WIDTH]);
        }
    }
}

export function getRandomPositions() {
    if (lookup.length == 0) {
        createLookupTable();
    }

    let choice = Math.floor(lookup.length * Math.random());
    return lookup[choice];
}

// Keep generating random positions until we generate one that's good: is not in the snake
export function getFood(snakePositions) {
    while (true) {
        var pos = getRandomPositions();
        let isGood = true;

        for (let sp of snakePositions) {
            if (pos[0] == sp[0] && pos[1] == sp[1]) {
                isGood = false;
                break;
            }
        }

        if (isGood) {
            break;
        }
    }
    drawRect(pos[0], pos[1], GAME_CONFIG.FOOD_CELL_COLOR);
    return new Cell(pos[0], pos[1]);
}

export function getRandomMovingDirection() {
    let choiceSpace = Object.keys(movingDirection);
    let choice = Math.floor(choiceSpace.length * Math.random());
    console.log(choice, choiceSpace[choice]);
    return movingDirection[choiceSpace[choice]];
}