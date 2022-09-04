/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  *
  */
class Vector
    extends BaseVector
{
    constructor( x=0.0, y=0.0 )
    {
        super(x, y)
    }

    calculatePosition( position=PositionVector,
                       makeNewPositionVector=false )
    {
        if( position instanceof PositionVector )
        {
            let nPos = null;

            if(makeNewPositionVector)
            {
                nPos = new PositionVector();
                nPos.assign( position );
            }
            else
            {
                nPos = position;
            }

            nPos.X = position.x + this.x;
            nPos.Y = position.y + this.y;

            return nPos;
        }
        else
        {
            throw new Error( 'Wrong type' );
        }
    }
}

module.exports = Vector;