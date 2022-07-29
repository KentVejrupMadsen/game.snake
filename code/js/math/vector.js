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