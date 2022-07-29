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