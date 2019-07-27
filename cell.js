"use strict";

class Cell
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    toString()
    {
        return `Cell(x = ${this.x}, y = ${this.y})`;
    }
}