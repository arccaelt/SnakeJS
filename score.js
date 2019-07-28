export class ScoreHandler
{
    constructor() 
    {
        this.score = 0;
        this.scoreDomNode = document.getElementById("score");
        this.scoreDomNode.innerHTML = "Score: 0";
    }

    increment() 
    {
        this.score++;
        this._update();
    }

    _update() 
    {
        this.scoreDomNode.innerHTML = "Score: " + this.score;
    }
}