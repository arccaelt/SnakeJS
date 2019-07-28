export let GAME_CONFIG = {
    // time in ms
    GAME_SPEED : 200,

    BOARD_CELL_WIDTH : 20,
    BOARD_CELL_HEIGHT : 20,
    BOARD_ROWS : 20,
    BOARD_COLS : 20,

    BOARD_CELL_COLOR : "black",
    SNAKE_CELL_COLOR : "orange",
    FOOD_CELL_COLOR : "green",
};

export let movingDirection = {
    UP: [0, -1],
    DOWN: [0, 1],
    LEFT: [-1, 0],
    RIGHT: [1, 0]
};