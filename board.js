import {GAME_CONFIG} from "./config.js";
import {drawRect} from "./renderer.js";
import Cell from "./cell.js";
import {canvasWidth} from "./renderer.js";
import {canvasHeight} from "./renderer.js";

export default class Board {
    constructor() {
        this.cells = [];

        let cellWidth = GAME_CONFIG.BOARD_CELL_WIDTH;
        let cellHeight = GAME_CONFIG.BOARD_CELL_HEIGHT;

        for (let i = 0; i <= GAME_CONFIG.BOARD_ROWS; i++) {
            let cellRows = [];
            for (let j = 0; j <= GAME_CONFIG.BOARD_COLS; j++) {
                let cell = new Cell(i * cellHeight, j * cellWidth);
                console.log(cell);
                cellRows.push(cell);
            }

            this.cells.push(cellRows);
        }
    }

    isAtTheEdge(position) {
        if (position[0] < 0 || position[1] < 0)
            return true;

        if (position[0] >= canvasWidth || position[1] >= canvasHeight)
            return true;

        return false;
    }

    draw() {
        for (let rowCell of this.cells) {
            for (let cell of rowCell) {
                drawRect(cell.x, cell.y, GAME_CONFIG.BOARD_CELL_COLOR);
            }
        }
    }

    toString() {
        return `Board(width = ${this.width}, height = ${this.height}`;
    }
}