import {GAME_CONFIG} from "./config.js";

let _canvas = document.getElementById("canvas");
export let canvasWidth = _canvas.width;
export let canvasHeight = _canvas.height;
let _context = _canvas.getContext("2d");

export function drawRect(x, y, color) {
    _context.fillStyle = color;
    _context.fillRect(x, y, GAME_CONFIG.BOARD_CELL_WIDTH, GAME_CONFIG.BOARD_CELL_HEIGHT);
}