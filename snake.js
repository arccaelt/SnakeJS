import {GAME_CONFIG} from "./config.js";
import {Cell} from "./cell.js";
import {drawRect} from "./renderer.js";

export class Snake {
    constructor(start_x, start_y, initialMovingDirection) {
        this.direction = initialMovingDirection;
        this.body = [new Cell(start_x, start_y)];
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    grow() {
        let lastCell = this.body[this.body.length - 1];
        let newCellx = lastCell.x;
        let newCelly = lastCell.y + GAME_CONFIG.BOARD_CELL_WIDTH;

        this.body.push(new Cell(newCellx, newCelly));
        this._drawCell(newCellx, newCelly, newCellx, newCelly);
    }

    isSelfColliding() {
        if (this.body.length == 1) {
            return false;
        }

        for(let i = 0; i < this.body.length; i++) {
            for(let j = 0; j < this.body.length; j++) {
                if(i != j) {
                    if(this.body[i].x == this.body[j].x && this.body[i].y == this.body[j].y) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    getHeadX() {
        return this.body[0].x;
    }

    getHeadY() {
        return this.body[0].y;
    }

    getPositions() {
        let positions = [];
        for (let cell of this.body) {
            positions.push([cell.x, cell.y]);
        }

        return positions;
    }

    _drawCell(oldX, oldY, newX, newY) {
        drawRect(oldX, oldY, GAME_CONFIG.BOARD_CELL_COLOR);
        drawRect(newX, newY, GAME_CONFIG.SNAKE_CELL_COLOR);
    }

    moveAndDraw() {
        // move the head
        let previousCellPos = [this.body[0].x, this.body[0].y];
        this.body[0].x += this.direction[0] * GAME_CONFIG.BOARD_CELL_HEIGHT;
        this.body[0].y += this.direction[1] * GAME_CONFIG.BOARD_CELL_WIDTH;
        this._drawCell(previousCellPos[0], previousCellPos[1], this.body[0].x, this.body[0].y);

        for (let i = 1; i < this.body.length; i++) {
            let oldpos = [this.body[i].x, this.body[i].y];

            this.body[i].x = previousCellPos[0];
            this.body[i].y = previousCellPos[1];
            this._drawCell(oldpos[0], oldpos[1], this.body[i].x, this.body[i].y);

            previousCellPos[0] = oldpos[0];
            previousCellPos[1] = oldpos[1];
        }
    }
}