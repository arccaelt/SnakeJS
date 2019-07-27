"use strict";

let _canvas = document.getElementById("canvas");
let canvasWidth = _canvas.width;
let canvasHeight = _canvas.height;
let _context = _canvas.getContext("2d");

function drawRect(x, y, color) {
    _context.fillStyle = color;
    _context.fillRect(x, y, GAME_CONFIG.BOARD_CELL_WIDTH, GAME_CONFIG.BOARD_CELL_HEIGHT);
}