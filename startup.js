"use strict";

// Create stuff
let board = new Board();
let scoreHandler = new ScoreHandler();
let initialPos = getRandomPositions();
let snake = new Snake(initialPos[0], initialPos[1], getRandomMovingDirection());

// First moveAndDraw the board because otherwise the snake/food will be overwritten by the board
board.draw();
snake.moveAndDraw();
let food = getFood(snake.getPositions());

function mainLoop() {
    snake.moveAndDraw();

    if (board.isAtTheEdge([snake.getHeadX(), snake.getHeadY()]) || snake.isSelfColliding()) {
        alert("Game over!");
        window.location.reload(true);
    }

    if (snake.getHeadX() == food.x && snake.getHeadY() == food.y) {
        snake.grow();
        scoreHandler.increment();
        food = getFood(snake.getPositions());
        console.log(snake.getPositions());
        console.log(food);
        snake.moveAndDraw();
    }
}

// moveAndDraw the snake
setInterval(mainLoop, GAME_CONFIG.GAME_SPEED);

// event handling
document.body.onkeydown = function (ev) {
    switch (ev.key) {
        case 'ArrowUp':
            snake.setDirection(movingDirection.UP);
            break;
        case 'ArrowDown':
            snake.setDirection(movingDirection.DOWN);
            break;
        case 'ArrowLeft':
            snake.setDirection(movingDirection.LEFT);
            break;
        case 'ArrowRight':
            snake.setDirection(movingDirection.RIGHT);
    }
};