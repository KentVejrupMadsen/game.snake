/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  *
  */
class Snake
    extends Entity
{
    constructor()
    {
        super();
        console.log('created: player');

        this.position = new PositionVector();
        this.movement = new Vector();
    }


    get Movement()
    {
        this.movement;
    }

    set Movement( value )
    {
        this.movement = value;
    }

    get Position()
    {
        return this.position;
    }

    set Position(value)
    {
        this.position = value;
    }
}