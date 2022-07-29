/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  *
  */
class PositionVector
    extends BaseVector
{
    constructor( x=0.0, y=0.0 )
    {
        super(x, y);
    }

    assign( position )
    {
        if( position instanceof PositionVector )
        {
            this.x = position.x;
            this.y = position.y;
        }
        else
        {
            throw new Error();
        }
    }
}