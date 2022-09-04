/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  *
  */
class Game
{
    constructor()
    {
        this.player = new Snake();
        this.foods = Array();
    }

    get Player()
    {
        return this.player;
    }

    set Player( value )
    {
        this.player = value;
    }

    get Foods()
    {
        return this.foods;
    }

    set Foods( value )
    {
        this.foods = value;
    }
}

module.exports = Game;